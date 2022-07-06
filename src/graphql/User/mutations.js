const mutations = `
  login(name: String!, email: String!): LoginResponse!

  insertBookmarkForUser(input: InsertBookmarkForUserInput!): InsertBookmarkForUserPayload
`;

module.exports = { mutations };
