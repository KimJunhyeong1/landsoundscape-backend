const { types } = require("./types");
const { mutations } = require("./mutations");
const { queries } = require("./queries");
const { resolvers } = require("./resolvers");
const { dataSources } = require("./dataSources");

const Photo = { queries, mutations, dataSources, resolvers, types };

module.exports = { Photo };
