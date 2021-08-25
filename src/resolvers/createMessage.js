const { Message, Conversation } = require("../models");
const {
  createConversationForMusicians,
  createConversationForBandSender,
  createConversationForBandRecipient,
} = require("../utils/createConversations");
const validateBandUser = require("../utils/validateBandUser");

const createMessage = async (_, { input }) => {
  const senderId = input.senderId;
  const text = input.text;
  const recipientId = input.recipientId;

  const message = await Message.create({ senderId, text });
  const conversations = await Conversation.find({});

  const isSenderBand = await validateBandUser(senderId);
  const isRecipientBand = await validateBandUser(recipientId);

  let foundConversation = null;
  // find if conversation between the two participants already exists
  if (conversations) {
    // find if conversation already exists if one of the participants is a band member
    // logic for if the sender is a band
    if (isSenderBand) {
      const foundConversation = conversations.find(
        (conversation) =>
          conversation.bands.includes(senderId) &&
          conversation.musicians.includes(recipientId)
      );
    } else if (isRecipientBand) {
      // logic for if the recipient is a band
      const foundConversation = conversations.find(
        (conversation) =>
          conversation.musicians.includes(senderId) &&
          conversation.bands.includes(recipientId)
      );
    } else {
      const foundConversation = conversations.find(
        (conversation) =>
          conversation.musicians.includes(senderId) &&
          conversation.musicians.includes(recipientId)
      );
    }
  }

  // if conversation already exists update it with the new messaeg
  if (foundConversation) {
    await Conversation.findByIdAndUpdate(foundConversation._id, {
      $push: { messages: message._id },
    });
  } else {
    // if a conversation between the two participants doesn't exist, create one
    if (isSenderBand) {
      createConversationForBandSender(message._id, senderId, recipientId);
    } else if (isRecipientBand) {
      createConversationForBandRecipient(message._id, senderId, recipientId);
    } else {
      createConversationForMusicians(message._id, senderId, recipientId);
    }
  }

  return message;
};

module.exports = createMessage;
