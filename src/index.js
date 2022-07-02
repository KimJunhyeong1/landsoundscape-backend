const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
});

const startServer = async () => {
  await server.listen();

  console.log(`
  🚀  Server is running!
  🔉  Listening on port 4000
  📭  Query at https://studio.apollographql.com/dev`);
};

startServer();
