const { Photo } = require("./Photo");
const PhotoModel = require("../models/Photo");

const dataSources = () => ({
  photos: new Photo.dataSources(PhotoModel),
});

module.exports = dataSources;
