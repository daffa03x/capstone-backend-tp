const moogose = require("mongoose");
let userSchema = moogose.Schema(
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
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    phoneNumber: {
      type: String,
      required: [true, "nomor telepon harus diisi"],
    },
  },
  { timestamp: true }
);

module.exports = moogose.model("User", userSchema);
