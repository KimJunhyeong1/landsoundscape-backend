const { Photo } = require("./Photo");
const { User } = require("./User");
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");

const resolver = {
  Query: {
    ...User.resolvers.queries,
    ...Photo.resolvers.queries,
  },

  Upload: GraphQLUpload,

  Mutation: {
    ...User.resolvers.mutations,
    ...Photo.resolvers.mutations,
  },
};

module.exports = resolver;
