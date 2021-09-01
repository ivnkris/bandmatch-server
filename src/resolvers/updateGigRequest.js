const { Gig } = require("../models");

const updateGigRequest = async (_, { input }) => {
  const gig = await Gig.findOneAndUpdate(
    { "performers._id": input.id },
    { $set: { "performers.$.confirmed": input.confirmed } },
    { new: true }
  );

  return gig;
};

module.exports = updateGigRequest;
