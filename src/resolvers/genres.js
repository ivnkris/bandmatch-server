const { Genre } = require("../models");

const genres = async () => {
  const genres = await Genre.find({});

  console.log(genres);

  return genres;
};

module.exports = genres;
