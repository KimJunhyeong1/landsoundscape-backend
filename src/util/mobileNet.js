const fs = require("fs").promises;
const path = require("path");
const tf = require("@tensorflow/tfjs-node");
const axios = require("axios");

let model;

const loadModel = async () => {
  model = await tf.loadGraphModel(
    "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_large_100_224/classification/5/default/1",
    { fromTFHub: true },
  );
};

const covertImageToTensor = imageData => {
  const tensorImage = tf.node.decodeImage(imageData);

  return tensorImage;
};

const predict = async url => {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });
  const buffer = Buffer.from(response.data, "utf-8");
  const tensorImage = covertImageToTensor(buffer);

  const logits = model.predict(preprocess(tensorImage));
  const classIndex = await tf.argMax(tf.squeeze(logits)).data();
  const className = model.metadata["classNames"][classIndex[0]];

  return className;
};

const preprocess = imageTensor => {
  const widthToHeight = imageTensor.shape[1] / imageTensor.shape[0];
  let squareCrop;
  if (widthToHeight > 1) {
    const heightToWidth = imageTensor.shape[0] / imageTensor.shape[1];
    const cropTop = (1 - heightToWidth) / 2;
    const cropBottom = 1 - cropTop;
    squareCrop = [[cropTop, 0, cropBottom, 1]];
  } else {
    const cropLeft = (1 - widthToHeight) / 2;
    const cropRight = 1 - cropLeft;
    squareCrop = [[0, cropLeft, 1, cropRight]];
  }
  // Expand image input dimensions to add a batch dimension of size 1.
  const crop = tf.image.cropAndResize(
    tf.expandDims(imageTensor),
    squareCrop,
    [0],
    [224, 224],
  );
  return crop.div(255);
};

module.exports = { loadModel, predict };
