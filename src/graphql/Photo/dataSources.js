const { MongoDataSource } = require("apollo-datasource-mongodb");
const { Types } = require("mongoose");

class dataSources extends MongoDataSource {
  getPhotoRandomly(exceptionId) {
    return this.model
      .aggregate()
      .match({
        _id: { $not: { $eq: Types.ObjectId(exceptionId) } },
      })
      .sample(1);
  }
}

module.exports = { dataSources };
