const { Photo } = require("./Photo");

const resolver = {
  Query: {
    ...Photo.resolvers.queries,
  },
};

module.exports = resolver;
