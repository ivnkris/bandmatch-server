const { MusicianUser } = require("../models");

const checkIfMusicianExists = async (_, { input }) => {
  const { musicians } = input;
  console.log(musicians);

  // const musicianEmail = musicians[0];

  // const result = await MusicianUser.findOne({ email: musicianEmail });

  // console.log(result);

  const musicianValidationArray = musicians.map(async (musicianEmail) => {
    const user = await MusicianUser.findOne({ email: musicianEmail });

    if (!user) {
      return {
        email: musicianEmail,
        exists: false,
      };
    } else {
      return {
        email: musicianEmail,
        exists: true,
      };
    }
  });

  const musicianValidationOutcome = await Promise.all(musicianValidationArray);

  return musicianValidationOutcome;
};

module.exports = checkIfMusicianExists;
