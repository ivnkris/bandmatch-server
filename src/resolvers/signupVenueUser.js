const { VenueUser } = require("../models");

const { tokenise } = require("../utils/tokenise");

const signupVenueUser = async (_, { input }) => {
  const user = await VenueUser.create(input);

  const token = tokenise({ id: user.id, email: user.email });

  return { token, user, type: "venue" };
};

module.exports = signupVenueUser;
