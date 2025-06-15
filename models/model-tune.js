import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tuneSchema = new Schema(
  {
    tuneId: {
      type: String,
      unique: true,
      required: true,
    },
    tuneNumber: { type: Number, required: true },
    title: { type: String, minlength: 3, maxlength: 45, required: true },
    category: { type: Object, required: true },
    location: { type: String, minlength: 3, maxlength: 25 },
    composer: { type: String, minlength: 3, maxlength: 25 },
    isComposedByUs: { type: Boolean, default: false },
    recordings: { type: Object, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Tune = mongoose.model("tune", tuneSchema);

export default Tune;
