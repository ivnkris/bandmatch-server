const musicianUser = require("./musicianUser");
const band = require("./band");
const assemble = require("./assemble");
const collaborate = require("./collaborate");
const login = require("./login");
const signup = require("./signup");

const resolvers = {
  Query: {
    musicianUser,
    band,
    assemble,
    collaborate,
  },
  Mutation: {
    login,
    signup,
  },
};

module.exports = resolvers;
