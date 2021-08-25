const { Conversation } = require("../models");

const createConversationForBandSender = async (
  messageId,
  senderId,
  recipientId
) => {
  await Conversation.create({
    bands: [senderId],
    musicians: [recipientId],
    messages: [messageId],
  });
};

const createConversationForBandRecipient = async (
  messageId,
  senderId,
  recipientId
) => {
  await Conversation.create({
    bands: [recipientId],
    musicians: [senderId],
    messages: [messageId],
  });
};

const createConversationForMusicians = async (
  messageId,
  senderId,
  recipientId
) => {
  await Conversation.create({
    musicians: [senderId, recipientId],
    messages: [messageId],
  });
};

module.exports = {
  createConversationForBandSender,
  createConversationForBandRecipient,
  createConversationForMusicians,
};
