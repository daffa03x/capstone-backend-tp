const { default: mongoose } = require("mongoose");
const moogose = require("mongoose");
let transactionSchema = moogose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "Nama Game Harus diisi"] },
      category: { type: String, require: [true, "Kategori Harus diisi"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "Nama Koin Harus diisi"] },
      coinQuantity: { type: String, require: [true, "Jumlah Koin Harus diisi"] },
      price: { type: Number },
    },

    historyPayment: {
      name: { type: String, require: [true, "Nama  Harus diisi"] },
      type: { type: String, require: [true, "Tipe Pembayaran  Harus diisi"] },
      bankName: { type: String, require: [true, "Nama Bank  Harus diisi"] },
      noRekening: { type: String, require: [true, "Nomor Rekening  Harus diisi"] },
    },

    historyUser: {
      name: { type: String, require: [true, "Nama User Harus diisi"] },
      phoneNumber: {
        type: String,
        require: [true, "Nomor HP  Harus diisi"],
        minlenght: [9, "No HP minimal 9 karakter"],
        maxlenght: [13, "No HP maksimal 13 karakter"],
      },
    },

    name: {
      type: String,
      require: [true, "Nama Harus Diisi"],
    },

    accountUser: {
      type: String,
      require: [true, "Nama Akun Harus Diisi"],
    },

    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);

module.exports = moogose.model("Transaction", transactionSchema);
