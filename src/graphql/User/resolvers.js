const { AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const queries = {
  user: async (_, { id }, { dataSources: { users }, user }) => {
    return users.getUser(id);
  },
};

const mutations = {
  login: async (_, { name, email }, { dataSources: { users } }) => {
    const userInput = { name, email };
    let userData = await users.getUserByQuery({ email });

    if (!userData) {
      userData = await users.createUser(userInput);
    }

    const accessToken = jwt.sign(userInput, config.JWT_SECRET);

    return {
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      accessToken,
    };
  },

  insertBookmarkForUser: async (
    _,
    { input },
    { dataSources: { users }, user },
  ) => {
    if (!user) throw new AuthenticationError("not authenticated");

    const userData = await users.addBookmark(input);

    return { bookmarks: userData.bookmarks };
  },
};

const resolvers = { queries, mutations };

module.exports = { resolvers };
