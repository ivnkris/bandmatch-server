const { Band } = require("../models");

const bands = async (_, { filters }) => {
  const bands = await Band.find({})
    .populate("musicians")
    .populate("genre")
    .populate("instruments")
    .populate("lookingFor");

  if (filters) {
    const { musician: musicianId } = filters;
    const filteredBands = bands.filter((band) => {
      const filteredMusicians = band.musicians.filter((musician) => {
        return musician._id == musicianId;
      });
      return filteredMusicians.length;
    });

    return filteredBands;
  }

  return bands;
};

module.exports = bands;
