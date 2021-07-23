const db = require("../config/connection");
const { User, Gig } = require("../models");

const { bands, musicians, venues, gigs } = require("./seeds");

db.once("open", async () => {
  try {
    await User.deleteMany({});
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

    await User.insertMany(venuesToSeed);
    console.log("Venues seeded successfully!!!");

    await User.insertMany(bands);
    console.log("Bands seeded successfully!!!");

    await User.insertMany(musicians);
    console.log("Musicians seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
