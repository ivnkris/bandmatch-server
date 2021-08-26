const { Gig } = require("../models");

const createGigRequest = async (_, { input }) => {
  const performersObject = {};
  // let foundGig;

  // if (input.performer.musician) {
  //   performersObject.musician = input.performer.musician;
  //   foundGig = await Gig.find({
  //     _id: input.id,
  //     performers: { $in: { musician: input.performer.musician } },
  //   });
  // }

  // if (input.performer.band) {
  //   performersObject.band = input.performer.band;
  //   foundGig = await Gig.find({
  //     _id: input.id,
  //     $in: { performers: { band: input.performer.band } },
  //   });
  // }

  // console.log(foundGig);

  const gig = await Gig.findOneAndUpdate(
    { _id: input.id },
    { $push: { performers: performersObject } },
    { new: true }
  );
  return gig;
};

module.exports = createGigRequest;
