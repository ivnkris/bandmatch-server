const { MusicianUser } = require("../models");

const checkIfMusicianExists = async (_, { input }) => {
  const { musicians } = input;

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
        id: user.id,
        exists: true,
      };
    }
  });

  const musicianValidationOutcome = await Promise.all(musicianValidationArray);

  return musicianValidationOutcome;
};

module.exports = checkIfMusicianExists;
