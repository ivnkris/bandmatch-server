const musicianUser = require("./musicianUser");
const band = require("./band");
const assemble = require("./assemble");
const collaborate = require("./collaborate");
const genres = require("./genres");
const instruments = require("./instruments");
const login = require("./login");
const signup = require("./signup");
const createBand = require("./createBand");
const gigs = require("./gigs");
const messages = require("./messages");
const createMessage = require("./createMessage");

const resolvers = {
	Query: {
		musicianUser,
		band,
		assemble,
		collaborate,
		genres,
		instruments,
		gigs,
		messages,
	},
	Mutation: {
		login,
		signup,
		createBand,
		createMessage,
	},
};

module.exports = resolvers;
