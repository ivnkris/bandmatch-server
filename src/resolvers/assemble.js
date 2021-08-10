const { MusicianUser, Band } = require("../models");

const constructFilters = (filters) => {
  const array = Object.entries(filters);

  return array.reduce((acc, each) => {
    if (each[0] !== "type") {
      return {
        ...acc,
        [each[0]]: { $in: each[1] },
      };
    }
  }, {});
};

const assemble = async (_, { filters }) => {
  const bands = await Band.find(constructFilters(filters || {}))
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  const musicians = await MusicianUser.find(constructFilters(filters || {}))
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  return { musicians, bands };
};

module.exports = assemble;
