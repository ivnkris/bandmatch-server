const { Band } = require("../models");

const createBand = async (_, { input }) => {
  const band = await Band.create({ ...input });

  return band;
};

module.exports = createBand;
