//src/models/Post.js
import mongoose, { Schema } from "mongoose";

class Solution {

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
      feature: {
          type: Object,
          required: false,
      },
      overall: {
          type: Object,
          required: false,
      }
    }, { timestamps: true });
    mongoose.model("solutionContentDetail", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("solutionContentDetail");
  }
}

export default Solution