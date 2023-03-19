const moogose = require("mongoose");
let categorySchema = moogose.Schema(
  {
    name: {
      type: String,
      required: [true, "nama kategori harus diisi"],
    },
  },
  { timestamp: true }
);

module.exports = moogose.model("Category", categorySchema);
