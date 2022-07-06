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

  type InsertBookmarkForUserPayload {
    bookmarks: [ID]
  }

  input InsertBookmarkForUserInput {
    userId: ID!
    photoId: ID!
  }
`;

module.exports = { types };
