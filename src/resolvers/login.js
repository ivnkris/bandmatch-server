const { AuthenticationError } = require("apollo-server-express");

const { MusicianUser } = require("../models");

const { tokenise } = require("../utils/tokenise");

const login = async (_, { input }) => {
	const { email, password } = input;

	const user = await MusicianUser.findOne({ email });

	if (!user) {
		throw new AuthenticationError("User does not exist");
	}

	const isValidPassword = await user.validatePassword(password);

	if (!isValidPassword) {
		throw new AuthenticationError("Incorrect email or password");
	}

	const token = tokenise({ id: user.id, email: user.email });

	return { token, user };
};

module.exports = login;
