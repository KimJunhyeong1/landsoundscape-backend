const { types } = require("./types");
const { mutations } = require("./mutations");
const { resolvers } = require("./resolvers");
const { dataSources } = require("./dataSources");

const User = { mutations, dataSources, resolvers, types };

module.exports = { User };
