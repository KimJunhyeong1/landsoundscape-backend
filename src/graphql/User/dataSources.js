const { MongoDataSource } = require("apollo-datasource-mongodb");

class dataSources extends MongoDataSource {
  getUser(id) {
    return this.findOneById(id);
  }
  getUserByQuery(query) {
    return this.model.findOne(query);
  }
  createUser(user) {
    return this.model.create(user);
  }
}

module.exports = { dataSources };
