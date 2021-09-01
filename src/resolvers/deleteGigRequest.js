const { Gig } = require("../models");

const deleteGigRequest = async (_, { id }) => {
  await Gig.updateMany({}, { $pull: { performers: { _id: id } } });

  return id;
};

module.exports = deleteGigRequest;
