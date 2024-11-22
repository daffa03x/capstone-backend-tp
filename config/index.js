const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
  rootPath: path.resolve(__dirname, ".."),
  serviceName: process.env.SERVICE_NAME,
  urlDb: "mongodb+srv://daffa03x:085123dafa@cluster0.imtcis6.mongodb.net/?retryWrites=true&w=majority",
};
