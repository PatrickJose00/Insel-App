import * as express from "express";
import resolvers from "../src/graphql/resolvers"
import typeDefs from "../src/graphql/typeDefs";
import accessEnv from "../helpers/accessEnv";

const { ApolloServer } = require("apollo-server-express")
const PORT = accessEnv("PORT", 7000);


(async function() {  
  const server = new ApolloServer({ typeDefs, resolvers });
  
  const app = express();
  await server.start();
  server.applyMiddleware({ app });
    
  app.listen(PORT, "0.0.0.0", () => {
    console.info(`project service listening on ${PORT}`);
  });
})();