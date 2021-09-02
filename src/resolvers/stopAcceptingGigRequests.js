const { Gig } = require("../models");

const stopAcceptingGigRequests = async (_, { id }) => {
  console.log(id);
  const updatedGig = await Gig.findOneAndUpdate(
    { _id: id },
    { accepting: false },
    { new: true }
  );

  return updatedGig._id;
};

module.exports = stopAcceptingGigRequests;
