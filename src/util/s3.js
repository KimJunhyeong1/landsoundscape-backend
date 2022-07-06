const config = require("../config");
const stream = require("stream");
const AWS = require("aws-sdk");

AWS.config = new AWS.Config();
AWS.config.update({
  region: config.AWS_S3_REGION,
  accessKeyId: config.AWS_ACCESS_KEY,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

const createUploadStream = (key, bucketName) => {
  const pass = new stream.PassThrough();
  return {
    writeStream: pass,
    promise: s3
      .upload({
        Bucket: bucketName,
        Key: key,
        Body: pass,
        ACL: "public-read",
      })
      .promise(),
  };
};

const fileUpload = async ({ file, bucketName }) => {
  const { createReadStream, filename, mimetype, encoding } = await file;

  const stream = createReadStream();
  const filePath = filename;
  const uploadStream = createUploadStream(filePath, bucketName);

  stream.pipe(uploadStream.writeStream);

  const result = await uploadStream.promise;
  const link = result.Location;

  return { filename, mimetype, encoding, url: link };
};

module.exports = { fileUpload };
