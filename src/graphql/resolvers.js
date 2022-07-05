const { Photo } = require("./Photo");
const { User } = require("./User");

const resolver = {
  Query: {
    ...Photo.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
  },
};

module.exports = resolver;
