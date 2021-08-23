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
const checkIfMusicianExists = require("./checkIfMusicianExists");
const conversations = require("./conversations");
const createMessage = require("./createMessage");
const signupVenueUser = require("./signupVenueUser");
const conversation = require("./conversation");
const bands = require("./bands");

const resolvers = {
  Query: {
    musicianUser,
    band,
    assemble,
    collaborate,
    genres,
    instruments,
    gigs,
    checkIfMusicianExists,
    conversations,
    conversation,
    bands,
  },
  Mutation: {
    login,
    signup,
    createBand,
    createMessage,
    signupVenueUser,
  },
};

module.exports = resolvers;
