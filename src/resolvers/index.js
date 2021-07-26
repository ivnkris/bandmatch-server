const musicianUser = require("./musicianUser");
const band = require("./band");
const assemble = require("./assemble");
const collaborate = require("./collaborate");

const resolvers = {
  Query: {
    musicianUser,
    band,
    assemble,
    collaborate,
  },
};

module.exports = resolvers;
