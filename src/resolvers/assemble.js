const { MusicianUser, Band } = require("../models");

const assemble = async (_, { id }) => {
  return "Test";
};

module.exports = assemble;
