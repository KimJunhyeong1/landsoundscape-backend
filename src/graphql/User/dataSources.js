const { MongoDataSource } = require("apollo-datasource-mongodb");

class dataSources extends MongoDataSource {
  getUser(id) {
    return this.model.findById(id).populate("bookmarks").populate("myPhotos");
  }

  getUserByQuery(query) {
    return this.model.findOne(query);
  }

  createUser(user) {
    return this.model.create(user);
  }

  addBookmark({ userId, photoId }) {
    return this.model.findByIdAndUpdate(
      userId,
      {
        $addToSet: { bookmarks: photoId },
      },
      { new: true },
    );
  }

  deleteBookmark({ userId, photoId }) {
    return this.model.findByIdAndUpdate(
      userId,
      {
        $pull: { bookmarks: photoId },
      },
      { new: true },
    );
  }

  addMyPhoto({ name, photoId }) {
    return this.model.findOneAndUpdate(
      { name },
      {
        $addToSet: { myPhotos: photoId },
      },
      { new: true },
    );
  }

  deleteMyPhoto({ userId, photoId }) {
    return this.model
      .findByIdAndUpdate(
        userId,
        {
          $pull: { myPhotos: photoId },
        },
        { new: true },
      )
      .populate("myPhotos");
  }
}

module.exports = { dataSources };
