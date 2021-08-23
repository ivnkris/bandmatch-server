const { Conversation } = require("../models");

const conversation = async (_, { id }) => {
  const conversation = await Conversation.findById(id)
    .populate("messages")
    .populate("participants");

  return conversation;
};

module.exports = conversation;
