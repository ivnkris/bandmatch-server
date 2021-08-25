const { Band } = require("../models");

const validateBandUser = async (id) => {
  const user = await Band.findById(id);
  console.log("validation user", user);
  const isUserValid = user === null ? false : true;
  return isUserValid;
};

module.exports = validateBandUser;
