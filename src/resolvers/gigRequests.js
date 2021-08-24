const { Gig } = require("../models");

const gigRequests = async (_, { id }) => {
	const gigs = await Gig.find({ venue: id })
		.lean()
		.populate("genre")
		.populate("venue");

	const filteredGigs = gigs.map((gig) => {
		const filteredPerformers = gig.performers.filter((each) => {
			return each.confirmed === false;
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
