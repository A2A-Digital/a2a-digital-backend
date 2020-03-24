
import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();
class Connection {
  constructor() {
    const url =
        process.env.MONGODB_URI;
    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url);
  }
}

export default new Connection();