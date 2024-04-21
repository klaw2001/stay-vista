import { NextResponse } from "next/server";
import { connectMongoDB } from "@/db/mongoDB";
import Hotel from "@/models/hotel.model";
import cors from "cors"


 
export async function POST(req) {
    try {
    const { name, location, description, rating, amenities, rooms, avatar, images } = await req.json();
    await connectMongoDB();
    const hotel = new Hotel({ 
      name, 
      location, 
      description, 
      rating, 
      amenities, 
      avatar,
      rooms: rooms.map(room => ({
        ...room,
        images: room.images || null
      }))
    });
    console.log(hotel)
    await hotel.save();

    return NextResponse.json({ message: "Hotel added." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while adding the hotel." },
      { status: 500 }
    );
  }
}
