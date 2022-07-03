const types = `
  type Photo {
    _id: ID!
    imageUrl: String!
    soundUrl: String!
    tags: [String]
    country: String!
    city: String!
  }
`;

module.exports = { types };
