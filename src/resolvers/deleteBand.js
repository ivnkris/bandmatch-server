const { Band } = require("../models");

const deleteBand = async (_, { id }) => {
  const band = await Band.deleteOne({ id });

  return band;
};

module.exports = deleteBand;
