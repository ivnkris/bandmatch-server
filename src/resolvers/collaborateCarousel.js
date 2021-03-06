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

const getBands = async (filters) => {
  const constructedFilters = constructFilters(filters || {});

  const searchFilters = { ...constructedFilters, openToCollaboration: true };

  const bands = await Band.find(searchFilters)
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor")
    .limit(5)
    .sort({ createdAt: -1 });

  return bands;
};

const getMusicians = async (filters) => {
  const constructedFilters = constructFilters(filters || {});

  const searchFilters = { ...constructedFilters, openToCollaboration: true };

  const musicians = await MusicianUser.find(searchFilters)
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor")
    .limit(5)
    .sort({ createdAt: -1 });

  return musicians;
};

const collaborateCarousel = async (_, { filters }) => {
  if (filters) {
    let cleansedFilters = {};
    Object.keys(filters).forEach((filterKey) => {
      if (filters[filterKey].length) {
        cleansedFilters[filterKey] = filters[filterKey];
      }
    });

    if (!cleansedFilters.userType || cleansedFilters.userType.length === 2) {
      const bands = await getBands(cleansedFilters);
      const musicians = await getMusicians(cleansedFilters);

      return { musicians, bands };
    }

    if (cleansedFilters.userType[0] === "band") {
      const bands = await getBands(cleansedFilters);
      return { bands, musicians: [] };
    }

    if (cleansedFilters.userType[0] === "musician") {
      const musicians = await getMusicians(cleansedFilters);
      return { musicians, bands: [] };
    }
    return;
  } else {
    const bands = await getBands();
    const musicians = await getMusicians();

    return { musicians, bands };
  }
};

module.exports = collaborateCarousel;
