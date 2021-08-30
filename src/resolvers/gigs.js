const { Gig } = require("../models");

const gigs = async (_, { filters, gigsOffset }) => {
  const gigs = await Gig.find({ accepting: true })
    .populate("genre")
    .populate("venue")
    .skip(gigsOffset)
    .limit(6);

  if (filters) {
    const gigs = await Gig.find({ accepting: true })
      .populate("genre")
      .populate("venue");

    let filteredGigs;
    if (filters.musician || filters.band) {
      filteredGigs = gigs.filter((gig) => {
        const filteredPerformers = gig.performers.filter((performers) => {
          if (filters.musician && performers.confirmed === "true") {
            return filters.musician === performers.musician;
          } else if (filters.band && performers.confirmed === "true") {
            return filters.band === performers.band;
          }
        });

        return filteredPerformers.length;
      });
    } else if (filters.venue) {
      filteredGigs = gigs.filter((gig) => {
        return gig.venue._id == filters.venue;
      });
    }

    return filteredGigs;
  }

  return gigs;
};

module.exports = gigs;
