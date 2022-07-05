const types = `
  type User {
    _id: ID!
    email: String!
    name: String!
    bookmark: [Photo]
    myPhotos: [Photo]
  }

  type LoginResponse{
    _id: ID!
    email: String!
    name: String!
    accessToken: String!
  }
`;

module.exports = { types };
