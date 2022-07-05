const { Photo } = require("./Photo");
const { User } = require("./User");

const PhotoModel = require("../models/Photo");
const UserModel = require("../models/User");

const dataSources = () => ({
  photos: new Photo.dataSources(PhotoModel),
  users: new User.dataSources(UserModel),
});

module.exports = dataSources;
