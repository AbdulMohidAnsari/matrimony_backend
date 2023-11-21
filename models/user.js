const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirmpassword: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    profilefor: {
      type: String,
      default:"self",
      enum:['self','son',"daughter","sister",'brother']
      //required: true,
    },
    createdAt:{type:Date,
    },
    createdby:{
        type:String
    },
    isactive: {
      type: Boolean,
      default: true,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = user = mongoose.model("user", userSchema);
