const { Gig } = require("../models");

const createGigRequest = async (_, { input }) => {
	const performersObject = {};

	if (input.performer.musician) {
		performersObject.musician = input.performer.musician;
	}

	if (input.performer.band) {
		performersObject.band = input.performer.band;
	}

	const gig = await Gig.findOneAndUpdate(
		{ _id: input.id },
		{ $push: { performers: performersObject } },
		{ new: true }
	);
	return gig;
};

module.exports = createGigRequest;
