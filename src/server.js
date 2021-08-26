const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const path = require("path");

const db = require("./config/connection");

const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const context = require("./context");

const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(
      path.join(__dirname, "https://arcane-springs-60231.herokuapp.com/")
    )
  );
}

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "https://arcane-springs-60231.herokuapp.com/")
  );
});

const http = db.once("open", () => {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});
