const { Venue } = require("../models");

const venue = async (_, { id }) => {
  const venue = await Venue.findById(id);

  return venue;
};

module.exports = venue;
