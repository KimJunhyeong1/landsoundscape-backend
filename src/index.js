const { ApolloServer } = require("apollo-server");
const { default: mongoose } = require("mongoose");
const { typeDefs, resolvers, dataSources, context } = require("./graphql");
const config = require("./config");
const loadModel = require("./util");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
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
