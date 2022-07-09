const { Photo } = require("./Photo");
const { User } = require("./User");
const { Marker } = require("./Marker");

const PhotoModel = require("../models/Photo");
const UserModel = require("../models/User");
const MarkerModel = require("../models/Marker");

const dataSources = () => ({
  photos: new Photo.dataSources(PhotoModel),
  users: new User.dataSources(UserModel),
  markers: new Marker.dataSources(MarkerModel),
});

module.exports = dataSources;
