const formatConversations = (conversation) => {
  const bandParticipants = conversation.bands || [];
  const musicianParticipants = conversation.musicians || [];

  return {
    id: conversation._id,
    participants: [...bandParticipants, ...musicianParticipants],
    messages: conversation.messages,
  };
};

module.exports = formatConversations;
