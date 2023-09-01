const { default: mongoose } = require("mongoose");
const moogose = require("mongoose");
let playerSchema = moogose.Schema(
  {
    email: {
      type: String,
      required: [true, "email harus diisi"],
    },
    name: {
      type: String,
      required: [true, "nama harus diisi"],
    },
    password: {
      type: String,
      required: [true, "password harus diisi"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: [true, "nomor telepon harus diisi"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamp: true }
);

module.exports = moogose.model("Player", playerSchema);
