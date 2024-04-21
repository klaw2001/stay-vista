import mongoose, { Schema, models } from "mongoose";

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    avatar:{
        type:String,
        default:null
    },
    rooms: [
      {
        type: {
          type: String,
          required: true,
        },
        capacity: {
          type: Number,
          required: true,
        },
        price_per_night: {
          type: Number,
          required: true,
        },
        availability: {
          type: Boolean,
          default: true,
        },
        images:{
            type:Array,
            default:null
        }
      }
    ],
  },
  { timestamps: true }
);

const Hotel = models.Hotel || mongoose.model("Hotel", hotelSchema);
export default Hotel;
