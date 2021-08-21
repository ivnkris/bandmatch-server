const { Schema, model } = require("mongoose");

const schema = {
	senderId: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
};
const messageSchema = new Schema(schema);

const Message = model("Message", messageSchema);

module.exports = Message;
