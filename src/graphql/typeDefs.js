const { gql } = require("apollo-server-express");

const { Photo } = require("./Photo");
const { User } = require("./User");

const typeDefs = gql`
  ${User.types}
  ${Photo.types}

  type Query {
    ${User.queries}
    ${Photo.queries}
  }

  type Mutation {
    ${User.mutations}
    ${Photo.mutations}
  }
`;

module.exports = typeDefs;
