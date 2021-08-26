const { Conversation } = require("../models");
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
  const conversationPromises = bandIds.map(async (bandId) => {
    const bandConversations = await Conversation.find({
      bands: { $in: bandId },
    })
      .populate("messages")
      .populate("bands")
      .populate("musicians");

    return {
      conversations: bandConversations.map(formatConversations),
    };
  });

  const conversations = await Promise.all(conversationPromises);

  return conversations;
};

module.exports = {
  conversations,
  bandConversations,
};
