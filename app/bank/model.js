const moogose = require("mongoose");
let bankSchema = moogose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama Pemilik Harus Diisi"],
    },
    bankName: {
      type: String,
      require: [true, "Nama Bank Harus Diisi"],
    },
    noRekening: {
      type: String,
      require: [true, "Nomor Rekening Bank Harus Diisi"],
    },
  },
  { timestamp: true }
);

module.exports = moogose.model("Bank", bankSchema);
