const db = require("../config/connection");
const {
  MusicianUser,
  Band,
  VenueUser,
  Venue,
  Gig,
  Instrument,
  Genre,
} = require("../models");

const {
  musicianUsers,
  bands,
  venueUsers,
  venues,
  gigs,
  instruments,
  genres,
} = require("./seeds");

db.once("open", async () => {
  try {
    await MusicianUser.deleteMany({});
    await Band.deleteMany({});
    await Instrument.deleteMany({});
    await Genre.deleteMany({});
    await VenueUser.deleteMany({});
    await Venue.deleteMany({});
    await Gig.deleteMany({});
    console.log("Collections deleted!!!");

    // generate random index
    const randomIndex = (number) => {
      return Math.floor(Math.random() * number);
    };

    await Genre.insertMany(genres);
    console.log("Genres seeded successfully!!!");

    await Instrument.insertMany(instruments);
    console.log("Instruments seeded successfully!!!");

    const genresFromDb = await Genre.find({});
    const instrumentsFromDb = await Instrument.find({});

    // seed venues
    await Venue.insertMany(venues);
    console.log("Venues seeded successfully!!!");

    const venuesFromDb = await Venue.find({});

    // seed gigs
    const gigsToSeed = gigs.map((gig) => {
      return {
        ...gig,
        genre: genresFromDb[randomIndex(genresFromDb.length)]._id,
        venue: venuesFromDb[randomIndex(venuesFromDb.length)]._id,
      };
    });

    await Gig.insertMany(gigsToSeed);
    console.log("Gigs seeded successfully!!!");

    //seed venue users
    const venueUsersToSeed = venueUsers.map((venueUser) => {
      return {
        ...venueUser,
        venue: [
          venuesFromDb[randomIndex(venuesFromDb.length)]._id,
          venuesFromDb[randomIndex(venuesFromDb.length)]._id,
        ],
      };
    });

    await VenueUser.insertMany(venueUsersToSeed);
    console.log("Venue Users seeded successfully!!!");

    const bandsToSeed = bands.map((band) => {
      const number = band.numberOfMembers;
      return {
        ...band,
        genre: [
          genresFromDb[randomIndex(genresFromDb.length)]._id,
          genresFromDb[randomIndex(genresFromDb.length)]._id,
        ],
        instruments: [
          instrumentsFromDb[randomIndex(instrumentsFromDb.length)]._id,
          instrumentsFromDb[randomIndex(instrumentsFromDb.length)]._id,
          instrumentsFromDb[randomIndex(instrumentsFromDb.length)]._id,
          instrumentsFromDb[randomIndex(instrumentsFromDb.length)]._id,
        ],
        lookingFor: [
          instrumentsFromDb[randomIndex(instrumentsFromDb.length)]._id,
        ],
      };
    });

    await Band.insertMany(bandsToSeed);
    console.log("Bands seeded successfully!!!");

    const musiciansToSeed = musicianUsers.map((musician) => {
      return {
        ...musician,
        genre: [genresFromDb[randomIndex(genresFromDb.length)]._id],
        instruments: [
          instrumentsFromDb[randomIndex(instrumentsFromDb.length)]._id,
        ],
        lookingFor: [
          instrumentsFromDb[randomIndex(instrumentsFromDb.length)]._id,
        ],
      };
    });

    const userPromises = musiciansToSeed.map((user) => {
      return MusicianUser.create(user);
    });

    await Promise.all(userPromises);

    console.log("Musicians seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
