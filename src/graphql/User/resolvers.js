const jwt = require("jsonwebtoken");
const config = require("../../config");

const mutations = {
  login: async (_, { name, email }, { dataSources: { users } }) => {
    const userPayload = { name, email };
    let userData = await users.getUserByQuery({ email });

    if (!userData) {
      userData = await users.createUser(userPayload);
    }

    const accessToken = jwt.sign(userPayload, config.JWT_SECRET);

    return {
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      accessToken,
    };
  },
};

const resolvers = { mutations };

module.exports = { resolvers };
