import mongoose from "mongoose";

const FavouriteRouteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureDate: { type: String, required: true },
  returnDate: { type: String },
  adults: { type: Number, required: true },
  cabinClass: { type: String, required: true },
});

export default mongoose.model("FavouriteRoute", FavouriteRouteSchema);
