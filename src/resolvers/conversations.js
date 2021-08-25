const { Conversation } = require("../models");

const conversations = async (_, { id }) => {
  const conversations = await Conversation.find({
    participants: { $in: id },
  })
    .populate("messages")
    .populate("participants");
  return conversations;
};

const bandConversations = async (_, { bandId }) => {
  const bandConversations = await Conversation.find({
    participants: { $in: bandId },
  })
    .populate("messages")
    .populate("participants");

  return bandConversations;
};

module.exports = {
  conversations,
  bandConversations,
};
