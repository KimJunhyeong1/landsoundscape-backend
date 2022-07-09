const { Photo } = require("./Photo");
const { User } = require("./User");
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
const { Marker } = require("./Marker");

const resolver = {
  Query: {
    ...User.resolvers.queries,
    ...Photo.resolvers.queries,
    ...Marker.resolvers.queries,
  },

  Upload: GraphQLUpload,

  Mutation: {
    ...User.resolvers.mutations,
    ...Photo.resolvers.mutations,
    ...Marker.resolvers.mutations,
  },
};

module.exports = resolver;
