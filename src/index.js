const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");

const server = new ApolloServer({ typeDefs, mocks: true });

const startServer = async () => {
  await server.listen();

  console.log(`
  🚀  Server is running!
  🔉  Listening on port 4000
  📭  Query at https://studio.apollographql.com/dev`);
};

startServer();
