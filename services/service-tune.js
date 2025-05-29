import Tune from "../models/model-tune.js";

export async function getAllTunes() {
  try {
    const tunes = await Tune.find();
    return tunes;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
