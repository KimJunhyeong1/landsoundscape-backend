const { types } = require("./types");
const { queries } = require("./queries");
const { resolvers } = require("./resolvers");
const { dataSources } = require("./dataSources");

const Photo = { queries, dataSources, resolvers, types };

module.exports = { Photo };
