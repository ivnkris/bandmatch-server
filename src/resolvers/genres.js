const { Genre } = require("../models");

const genres = async () => {
	const genres = await Genre.find({});

	return genres;
};

module.exports = genres;
