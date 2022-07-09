const { gql } = require("apollo-server-express");

const { Marker } = require("./Marker");
const { Photo } = require("./Photo");
const { User } = require("./User");

const typeDefs = gql`
  ${User.types}
  ${Photo.types}
  ${Marker.types}

  type Query {
    ${User.queries}
    ${Photo.queries}
    ${Marker.queries}
  }

  type Mutation {
    ${User.mutations}
    ${Photo.mutations}
    ${Marker.mutations}
  }
`;

module.exports = typeDefs;
