const { MusicianUser, Band } = require("../models");

const constructFilters = (filters) => {
  const array = Object.entries(filters);

  const filterObject = array.reduce((acc, each) => {
    if (each[0] !== "type") {
      return {
        ...acc,
        [each[0]]: { $in: each[1] },
      };
    } else {
      return acc;
    }
  }, {});

  return filterObject;
};

const getBands = async (filters) => {
  const bands = await Band.find(constructFilters(filters || {}))
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  return bands;
};

const getMusicians = async (filters) => {
  const musicians = await MusicianUser.find(constructFilters(filters || {}))
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  return musicians;
};

const assemble = async (_, { filters }) => {
  if (!filters.type || filters.type.length === 2) {
    const bands = getBands(filters);
    const musicians = getMusicians(filters);

    return { musicians, bands };
  }

  if (filters.type[0] === "band") {
    const bands = await getBands(filters);
    return { bands };
  }

  if (filters.type[0] === "musician") {
    const musicians = await getMusicians(filters);
    return { musicians };
  }
};

module.exports = assemble;
