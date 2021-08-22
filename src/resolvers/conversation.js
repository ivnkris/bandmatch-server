const { Conversation } = require("../models");

const conversation = async (_, { id }) => {
  const conversation = await Conversation.findById(id)
    .populate("messages")
    .populate("participants");

  console.log(conversation, id);
  return conversation;
};

module.exports = conversation;
