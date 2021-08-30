const { Gig } = require("../models");

const gigs = async (_, { filters, gigsOffset }) => {
  const gigs = await Gig.find({ accepting: true })
    .populate("genre")
    .populate("venue")
    .skip(gigsOffset)
    .limit(6);

  if (filters) {
    const filteredGigs = gigs.filter((gig) => {
      const filteredPerformers = gig.performers.filter((performers) => {
        if (filters.musician && performers.confirmed === "true") {
          return filters.musician === performers.musician;
        } else if (filters.band && performers.confirmed === "true") {
          return filters.band === performers.band;
        }
      });

      return filteredPerformers.length;
    });

    return filteredGigs;
  }

  return gigs;
};

module.exports = gigs;
