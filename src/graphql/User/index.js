const { types } = require("./types");
const { queries } = require("./queries");
const { mutations } = require("./mutations");
const { resolvers } = require("./resolvers");
const { dataSources } = require("./dataSources");

const User = { queries, mutations, dataSources, resolvers, types };

module.exports = { User };
