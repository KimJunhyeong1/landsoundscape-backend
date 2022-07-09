const tf = require("@tensorflow/tfjs-node");
const moblinet = require("@tensorflow-models/mobilenet");
const fs = require("fs").promises;
const path = require("path");
const { npy } = require("tfjs-npy-node");

const getImageFeatures = async (model, filepath) => {
  const data = await fs.readFile(
    path.join(__dirname, "../public/testImage.jpg"),
  );

  const tfImage = tf.node.decodeImage(data);

  const mobilenet = await tf.loadLayersModel(
    "file://src/public/mobileNet/model.json",
  );
  console.log(mobilenet);

  const mobileNetModelV3 = await tf.loadGraphModel(
    "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_100_224/feature_vector/1/default/1",
    { fromTFHub: true },
  );

  const features = await mobileNetModelV3.predict(preprocess(tfImage)).array();
  console.log(features[0].length);

  // const mobilenetModel = await moblinet.load();
  // const predictions = await mobilenetModel.classify(tfImage);

  return features[0];
};

function preprocess(imageTensor) {
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
}

const loadModel = async () => {
  const model = await tf.loadLayersModel("file://src/public/model.json");
  const imageFeature = await getImageFeatures();

  // console.log(imageFeature);
  // // const test = imageFeature.slice(0, 1000);
  // const tensor1 = await npy.load(
  //   path.join(__dirname, "../public/song_features2.npy"),
  // );

  // const arrayBuffer = await tensor1.array();

  // const distances = [];
  // for (let i = 0; i < arrayBuffer.length; i++) {
  //   const distance = await tf.losses
  //     .sigmoidCrossEntropy(imageFeature.slice(0, 1000), arrayBuffer[i])
  //     .array();

  //   distances.push({ i, distance });
  // }

  // distances.sort((a, b) => a.distance - b.distance);
  // console.log(distances);
};

module.exports = loadModel;
