const { Gig } = require("../models");

const gig = (_, { id }) => {
  const gig = Gig.findById(id).populate("venue").populate("genre");

  return gig;
};

module.exports = gig;
