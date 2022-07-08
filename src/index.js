const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
const { default: mongoose } = require("mongoose");
const { typeDefs, resolvers, dataSources, context } = require("./graphql");
const config = require("./config");
const express = require("express");
const http = require("http");

const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  try {
    await mongoose.connect(config.DATABASE_URL);
  } catch (error) {
    console.log(error);
  }

  console.log(`🎉 connected to database successfully`);

  await server.start();

  app.use(graphqlUploadExpress());

  server.applyMiddleware({
    app,
    path: "/",
  });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer();
