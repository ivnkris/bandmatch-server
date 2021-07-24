const user = require("./user");
const users = require("./users");
const gig = require("./gig");
const gigs = require("./gigs");

const resolvers = {
  Query: {
    user,
    users,
    gig,
    gigs,
  },
};

module.exports = resolvers;
