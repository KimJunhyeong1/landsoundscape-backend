const { MongoDataSource } = require("apollo-datasource-mongodb");
const { Types } = require("mongoose");

class dataSources extends MongoDataSource {
  getPhoto(id) {
    return this.findOneById(id);
  }

  getPhotoRandomly(exceptionId) {
    return this.model
      .aggregate()
      .match({
        _id: { $not: { $eq: Types.ObjectId(exceptionId) } },
      })
      .sample(1);
  }

  createPhoto(photo) {
    return this.model.create(photo);
  }
}

module.exports = { dataSources };
