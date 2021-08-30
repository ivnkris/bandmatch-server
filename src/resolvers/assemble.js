const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { MusicianUser, Band } = require("../models");

const constructFilters = (filters) => {
  const array = Object.entries(filters);

  const filterObject = array.reduce((acc, each) => {
    if (each[0] === "experienceLevel") {
      return {
        ...acc,
        [each[0]]: { $in: each[1] },
      };
    } else if (each[0] !== "userType") {
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

const getBands = async (filters, offset) => {
  const constructedFilters = constructFilters(filters || {});

  const searchFilters = { ...constructedFilters, openToMembers: true };

  const bands = await Band.find(searchFilters)
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor")
    .skip(offset)
    .limit(6);

  return bands;
};

const getMusicians = async (filters, offset) => {
  const constructedFilters = constructFilters(filters || {});

  const searchFilters = { ...constructedFilters, openToJoiningBand: true };

  const musicians = await MusicianUser.find(searchFilters)
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor")
    .skip(offset)
    .limit(6);

  return musicians;
};

const assemble = async (_, { filters, musiciansOffset, bandsOffset }) => {
  const id = uuidv4();
  if (filters) {
    let cleansedFilters = {};
    Object.keys(filters).forEach((filterKey) => {
      if (filters[filterKey].length) {
        cleansedFilters[filterKey] = filters[filterKey];
      }
    });

    if (!cleansedFilters.userType || cleansedFilters.userType.length === 2) {
      const bands = await getBands(cleansedFilters, bandsOffset);
      const musicians = await getMusicians(cleansedFilters, musiciansOffset);

      return { musicians, bands };
    }

    if (cleansedFilters.userType[0] === "band") {
      const bands = await getBands(cleansedFilters, bandsOffset);
      return { bands, musicians: [] };
    }

    if (cleansedFilters.userType[0] === "musician") {
      const musicians = await getMusicians(cleansedFilters, musiciansOffset);
      return { musicians, bands: [] };
    }
  } else {
    const bands = await getBands(_, bandsOffset);
    const musicians = await getMusicians(_, musiciansOffset);

    return { id, musicians, bands };
  }
};

module.exports = assemble;
