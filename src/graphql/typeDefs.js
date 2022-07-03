const { gql } = require("apollo-server");
const { Photo } = require("./Photo");

const typeDefs = gql`
  ${Photo.types}

  type Query {
    ${Photo.queries}
  }
`;

module.exports = typeDefs;
