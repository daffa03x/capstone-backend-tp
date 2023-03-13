const moogose = require("mongoose");
let paymentSchema = moogose.Schema({
  type: {
    type: String,
    require: [true, "Tipe Pembayaran Harus Diisi"],
  },
  status: {
    type: String,
    enum: ["Y", "N"],
    default: "Y",
  },
  banks: [
    {
      type: moogose.Schema.Types.ObjectId,
      ref: "Bank",
    },
  ],
});

module.exports = moogose.model("Payment", paymentSchema);
