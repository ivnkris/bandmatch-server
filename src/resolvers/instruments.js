const { Instrument } = require("../models");

const instruments = async () => {
  const instruments = await Instrument.find({});

  console.log(instruments);

  return instruments;
};

module.exports = instruments;
