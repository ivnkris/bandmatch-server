const musicianUser = require("./musicianUser");
const band = require("./band");
const assemble = require("./assemble");
const assembleCarousel = require("./assembleCarousel");
const collaborate = require("./collaborate");
const collaborateCarousel = require("./collaborateCarousel");
const genres = require("./genres");
const instruments = require("./instruments");
const login = require("./login");
const signup = require("./signup");
const createBand = require("./createBand");
const gig = require("./gig");
const gigs = require("./gigs");
const gigRequests = require("./gigRequests");
const createGig = require("./createGig");
const checkIfMusicianExists = require("./checkIfMusicianExists");
const conversations = require("./conversations");
const createMessage = require("./createMessage");
const signupVenueUser = require("./signupVenueUser");
const conversation = require("./conversation");
const bands = require("./bands");
const updateMusicianUser = require("./updateMusicianUser");
const venue = require("./venue");
const createGigRequest = require("./createGigRequest");
const updateGigRequest = require("./updateGigRequest");
const deleteBand = require("./deleteBand");

const resolvers = {
  Query: {
    musicianUser,
    band,
    assemble,
    assembleCarousel,
    collaborate,
    collaborateCarousel,
    genres,
    instruments,
    gig,
    gigs,
    checkIfMusicianExists,
    conversations,
    conversation,
    bands,
    venue,
    gigRequests,
  },
  Mutation: {
    login,
    signup,
    createBand,
    createMessage,
    signupVenueUser,
    createGig,
    updateMusicianUser,
    createGigRequest,
    updateGigRequest,
    deleteBand,
  },
};

module.exports = resolvers;
