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

    // await VenueUser.deleteMany({});
    // await Venue.deleteMany({});
    // await Gig.deleteMany({});

    console.log("Collections deleted!!!");

    // await Gig.insertMany(gigs);
    // console.log("Gigs seeded successfully!!!");

    // const gigsFromDb = await Gig.find({});

    // const venuesToSeed = venues.map((venue, index) => {
    //   return {
    //     ...venue,
    //     gigs: gigsFromDb[index]._id,
    //   };
    // });

    // await Venue.insertMany(venuesToSeed);
    // console.log("Venues seeded successfully!!!");

    // const venuesFromDb = await Venue.find({});

    // const venueUsersToSeed = venueUsers.map((venueUser, index) => {
    //   return {
    //     ...venueUser,
    //     venue: [venuesFromDb[index]._id, venuesFromDb[index + 5]._id],
    //   };
    // });

    // await VenueUser.insertMany(venueUsersToSeed);
    // console.log("Venue Users seeded successfully!!!");

    await Genre.insertMany(genres);
    console.log("Genres seeded successfully!!!");

    await Instrument.insertMany(instruments);
    console.log("Instruments seeded successfully!!!");

    const genresFromDb = await Genre.find({});
    const instrumentsFromDb = await Instrument.find({});

    const randomIndex = (number) => {
      return Math.floor(Math.random() * number);
    };

    const bandsToSeed = bands.map((band) => {
      const number = band.numberOfMembers;
      return {
        ...band,
        genre: [genresFromDb[randomIndex(genresFromDb.length)]._id],
        instruments: [
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
