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

  type UpdateBookmarkForUserPayload {
    bookmarks: [ID]
  }

  input UpdateBookmarkForUserInput {
    userId: ID!
    photoId: ID!
  }

  input UpdateMyPhotoInput {
    userId: ID!
    photoId: ID!
    country: String!
  }
`;

module.exports = { types };
