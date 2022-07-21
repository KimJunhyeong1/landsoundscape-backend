const mutations = `
  login(name: String!, email: String!): LoginResponse!

  insertBookmarkForUser(input: UpdateBookmarkForUserInput!): UpdateBookmarkForUserPayload

  deleteBookmark(input: UpdateBookmarkForUserInput!): UpdateBookmarkForUserPayload

  deleteMyPhoto(input: UpdateMyPhotoInput!): [Photo]
`;

module.exports = { mutations };
