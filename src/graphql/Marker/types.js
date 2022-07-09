const types = `
  type Marker {
    _id: ID!
    country: String!
    coordinates: [Float!]!
    photos: [Photo]
    photosNum: Int!
    recentlyPhotoUrl: String!
  }
`;

module.exports = { types };
