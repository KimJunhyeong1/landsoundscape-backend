const queries = `
  randomPhoto(id: ID): Photo

  photo(id: ID): Photo

  photos(tag: String!): [Photo]
`;

module.exports = { queries };
