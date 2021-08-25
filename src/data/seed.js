const db = require("../config/connection");
const {
  MusicianUser,
  Band,
  Venue,
  Gig,
  Instrument,
  Genre,
} = require("../models");

const {
  musicianUsers,
  bands,
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

    const musiciansFromDb = await MusicianUser.find({});

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
        musicians: [
          musiciansFromDb[randomIndex(musiciansFromDb.length)]._id,
          musiciansFromDb[randomIndex(musiciansFromDb.length)]._id,
        ],
      };
    });

    await Band.insertMany(bandsToSeed);
    console.log("Bands seeded successfully!!!");

    const bandsFromDb = await Band.find({});

    // seed venues

    const venuePromises = venues.map((venue) => {
      return Venue.create(venue);
    });

    await Promise.all(venuePromises);

    console.log("Venues seeded successfully!!!");

    const venuesFromDb = await Venue.find({});

    // seed gigs
    const gigsToSeed = gigs.map((gig) => {
      return {
        ...gig,
        genre: genresFromDb[randomIndex(genresFromDb.length)]._id,
        musicians: [musiciansFromDb[randomIndex(musiciansFromDb.length)]._id],
        performers: [
          {
            musician: musiciansFromDb[randomIndex(musiciansFromDb.length)]._id,
            confirmed: true,
          },
          {
            band: bandsFromDb[randomIndex(bandsFromDb.length)]._id,
            confirmed: false,
          },
        ],
        venue: venuesFromDb[randomIndex(venuesFromDb.length)]._id,
      };
    });

    await Gig.insertMany(gigsToSeed);
    console.log("Gigs seeded successfully!!!");

    const gigsFromDb = await Gig.find({});

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
