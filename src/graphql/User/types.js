const types = `
  type User {
    _id: ID!
    email: String!
    name: String!
    bookmarks: [Photo]
    myPhotos: [Photo]
  }

  type LoginResponse {
    _id: ID!
    email: String!
    name: String!
    accessToken: String!
  }

  input InsertBookmarkForUserInput {
    userId: ID!
    photoId: ID!
  }

  type InsertBookmarkForUserPayload {
    bookmarks: [ID]
  }
`;

module.exports = { types };
