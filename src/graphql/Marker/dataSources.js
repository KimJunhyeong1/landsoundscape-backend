const { MongoDataSource } = require("apollo-datasource-mongodb");

class dataSources extends MongoDataSource {
  async upsertMarker(query, data) {
    const isExists = await this.model.exists(query);

    if (isExists)
      return this.model.findOneAndUpdate(
        query,
        {
          $addToSet: { photos: data.photos[0] },
          recentlyPhotoUrl: data.recentlyPhotoUrl,
        },
        { new: true },
      );

    return this.model.create(data);
  }

  getMarkers() {
    return this.model.find().lean();
  }

  getMarker(id) {
    return this.model.findById(id).populate("photos").lean();
  }

  deletePhoto({ country, photoId }) {
    return this.model.findOneAndUpdate(
      country,
      {
        $pull: { photos: photoId },
      },
      { new: true },
    );
  }
}

module.exports = { dataSources };
