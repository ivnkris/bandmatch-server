const { Gig, MusicianUser, Band } = require("../models");

const gigRequests = async (_, { id }) => {
  const gigs = await Gig.find({ venue: id })
    .lean()
    .populate("genre")
    .populate("venue");

  const musicians = await MusicianUser.find({}).lean();
  const bands = await Band.find({}).lean();

  const filteredGigs = gigs.map((gig) => {
    const filteredPerformers = gig.performers.filter((each) => {
      if (each.musician) {
        const foundMusician = musicians.find((musician) => {
          return musician._id == each.musician;
        });
        each.musicianDetails = foundMusician;
      } else if (each.band) {
        const foundBand = bands.find((band) => {
          return band._id == each.band;
        });
        each.bandDetails = foundBand;
      }
      return each.confirmed === "pending";
    });
    const filteredPerformerGig = {
      ...gig,
      performers: filteredPerformers,
      id: gig._id,
    };
    return filteredPerformerGig;
  });
  return filteredGigs;
};

module.exports = gigRequests;
