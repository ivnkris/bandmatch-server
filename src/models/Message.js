const { Schema, model } = require("mongoose");

const schema = {
	sender: {
		type: String,
		required: true,
	},
	recipient: {
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
