const { Conversation, Band } = require("../models");
const formatConversations = require("../utils/formatConversations");

const conversations = async (_, { id }) => {
  const conversations = await Conversation.find({
    musicians: { $in: id },
  })
    .populate("messages")
    .populate("bands")
    .populate("musicians");

  const formattedConversations = conversations.map(formatConversations);

  return formattedConversations;
};

const bandConversations = async (_, { bandIds }) => {
  if (bandIds === []) {
    return;
  } else {
    const conversationPromises = bandIds.map(async (bandId) => {
      const bandConversations = await Conversation.find({
        bands: { $in: bandId },
      })
        .populate("messages")
        .populate("bands")
        .populate("musicians");

      if (bandConversations.length) {
        const formattedConversations =
          bandConversations.map(formatConversations);

        console.log("this is the band conv", bandConversations, "for", bandId);

        return {
          bandName: bandConversations[0].bands[0].name,
          conversations: formattedConversations,
        };
      } else {
        console.log("found an empty one");
        const band = await Band.findById(bandId);
        return {
          bandName: band.name,
          conversations: null,
        };
      }
    });

    const conversations = await Promise.all(conversationPromises);

    return conversations;
  }
};

module.exports = {
  conversations,
  bandConversations,
};
