//src/models/Post.js
import mongoose, { Schema } from "mongoose";

class Service {

  initSchema() {
    const schema = new Schema({
      title: {
        type: String,
        required: true,
      },
      
      meta: {
        type: Object,
        required: false,
      },
      header: {
          type: Object,
          required: false,
      },
      cards: {
          type: Object,
          required: false,
      },
      tools: {
          type: Object,
          required: false,
      },
      results: {
          type: Object,
          required: false,
      },
      business: {
          type: Object,
          required: false,
      }
    }, { timestamps: true });
    mongoose.model("serviceContentDetail", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("serviceContentDetail");
  }
}

export default Service