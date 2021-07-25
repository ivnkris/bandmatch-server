const db = require("../config/connection");
const { MusicianUser, Band, VenueUser, Venue, Gig } = require("../models");

const { musicianUsers, bands, venueUsers, venues, gigs } = require("./seeds");

db.once("open", async () => {
  try {
    await MusicianUser.deleteMany({});
    await Band.deleteMany({});
    await VenueUser.deleteMany({});
    await Venue.deleteMany({});
    await Gig.deleteMany({});

    console.log("Collections deleted!!!");

    await Gig.insertMany(gigs);
    console.log("Gigs seeded successfully!!!");

    const gigsFromDb = await Gig.find({});

    const venuesToSeed = venues.map((venue, index) => {
      return {
        ...venue,
        gigs: gigsFromDb[index]._id,
      };
    });

    await Venue.insertMany(venuesToSeed);
    console.log("Venues seeded successfully!!!");

    const venuesFromDb = await Venue.find({});

    const venueUsersToSeed = venueUsers.map((venueUser, index) => {
      return {
        ...venueUser,
        venue: [venuesFromDb[index]._id, venuesFromDb[index + 5]._id],
      };
    });

    await VenueUser.insertMany(venueUsersToSeed);
    console.log("Venue Users seeded successfully!!!");

    await Band.insertMany(bands);
    console.log("Bands seeded successfully!!!");

    const bandsFromDb = await Band.find({});

    const musiciansToSeed = musicianUsers.map((musician, index) => {
      return {
        ...musician,
        bandId: bandsFromDb[index]._id,
      };
    });

    await MusicianUser.insertMany(musiciansToSeed);
    console.log("Musicians seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
