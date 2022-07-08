const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

module.exports = {
  DATABASE_URL: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,

  AWS_S3_REGION: process.env.AWS_S3_REGION,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,

  PYTHON_PATH: process.env.PYTHON_PATH,
};
