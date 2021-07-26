const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
};
const instrumentSchema = new Schema(schema);

const Instrument = model("Instrument", instrumentSchema);

module.exports = Instrument;
