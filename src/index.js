const { ApolloServer } = require("apollo-server");
const { default: mongoose } = require("mongoose");
const { typeDefs, resolvers, dataSources } = require("./graphql");
const config = require("./config");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

const startServer = async () => {
  try {
    await mongoose.connect(config.DATABASE_URL);
  } catch (error) {
    console.log(error);
  }

  console.log(`🎉 connected to database successfully`);

  const { url } = await server.listen();

  console.log(`
  🚀  Server is running at ${url}
  📭  Query at https://studio.apollographql.com/dev`);
};

startServer();
