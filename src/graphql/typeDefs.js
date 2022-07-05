const { gql } = require("apollo-server");

const { Photo } = require("./Photo");
const { User } = require("./User");

const typeDefs = gql`
  ${Photo.types}
  ${User.types}

  type Query {
    ${Photo.queries}
  }

  type Mutation {
    ${User.mutations}
  }
`;

module.exports = typeDefs;
