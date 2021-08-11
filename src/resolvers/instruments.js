const { Instrument } = require("../models");

const instruments = async () => {
  const instruments = await Instrument.find({});

  return instruments;
};

module.exports = instruments;
