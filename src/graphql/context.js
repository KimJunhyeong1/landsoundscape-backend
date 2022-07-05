const jwt = require("jsonwebtoken");
const config = require("../config");

const context = ({ req }) => {
  const authToken = req.headers.authorization;

  if (!authToken) return { user: undefined };

  const [authType, jwtToken] = [
    authToken.split(" ")[0],
    authToken.split(" ")[1],
  ];

  if (authType !== "Bearer") return { user: undefined };

  const verifiedUserData = jwt.verify(
    jwtToken,
    config.JWT_SECRET,
    (error, payload) => {
      if (error) return null;

      return payload;
    },
  );

  if (!verifiedUserData) return { user: undefined };

  return { user: verifiedUserData };
};

module.exports = context;
