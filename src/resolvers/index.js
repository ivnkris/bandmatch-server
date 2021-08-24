const musicianUser = require("./musicianUser");
const band = require("./band");
const assemble = require("./assemble");
const collaborate = require("./collaborate");
const genres = require("./genres");
const instruments = require("./instruments");
const login = require("./login");
const signup = require("./signup");
const createBand = require("./createBand");
const gig = require("./gig");
const gigs = require("./gigs");
const createGig = require("./createGig");
const checkIfMusicianExists = require("./checkIfMusicianExists");
const conversations = require("./conversations");
const createMessage = require("./createMessage");
const signupVenueUser = require("./signupVenueUser");
const conversation = require("./conversation");
const bands = require("./bands");
const updateMusicianUser = require("./updateMusicianUser");

const resolvers = {
  Query: {
    musicianUser,
    band,
    assemble,
    collaborate,
    genres,
    instruments,
    gig,
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
    createGig,
    updateMusicianUser,
  },
};

module.exports = resolvers;
