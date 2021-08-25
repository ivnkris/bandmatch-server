const { Conversation } = require("../models");
const validateBandUser = require("../utils/validateBandUser");

const conversations = async (_, { id }) => {
  const conversations = await Conversation.find({
    musicians: { $in: id },
  })
    .populate("messages")
    .populate("bands")
    .populate("musicians");

  const formattedConversations = conversations.map((conversation) => {
    const bandParticipants = conversation.bands || [];
    const musicianParticipants = conversation.musicians || [];

    return {
      id: conversation._id,
      participants: [...bandParticipants, ...musicianParticipants],
      messages: conversation.messages,
    };
  });

  return formattedConversations;
};

const bandConversations = async (_, { bandId }) => {
  const bandConversations = await Conversation.find({
    bands: { $in: bandId },
  })
    .populate("messages")
    .populate("participants")
    .populate("bandParticipants");

  return bandConversations;
};

module.exports = {
  conversations,
  bandConversations,
};
