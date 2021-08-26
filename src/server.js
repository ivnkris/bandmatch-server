const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const socketIo = require("socket.io");
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
  app.use(express.static(path.join(__dirname, "../client/build")));
}

const http = db.once("open", () => {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});

const io = socketIo(http);

io.once("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});
