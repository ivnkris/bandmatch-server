const { Band } = require("../models");

const updateBand = async (_, { input }) => {
  const bandInfo = input.bandInfo;
  const updatedBand = await Band.findByIdAndUpdate(input.bandId, {
    ...bandInfo,
  });

  return updatedBand;
};

module.exports = updateBand;
