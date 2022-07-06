const types = `
  scalar Upload

  type Photo {
    _id: ID!
    imageUrl: String!
    soundUrl: String
    creator: String!
    tags: [String]
    country: String!
    city: String!
  }

  input PhotoInput  {
    creator: String!
    country: String!
    city: String!
  }
`;

module.exports = { types };
