import { NextResponse } from "next/server";
import { connectMongoDB } from "@/db/mongoDB";
import Hotel from "@/models/hotel.model";

export async function PUT(req , {params}) {
    try {
        const id = params.id;
        const { name, location, description, rating, amenities, rooms, avatar, images } = await req.json();
        await connectMongoDB();
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { 
            name, 
            location, 
            description, 
            rating, 
            amenities, 
            avatar,
            rooms: rooms?.map(room => ({
                ...room,
                images: room.images || null
            }))
        }, { new: true });
        
        if (!updatedHotel) {
            return NextResponse.json({ message: "Hotel not found." }, { status: 404 });
        }
        
        return NextResponse.json({ message: "Hotel updated.", hotel: updatedHotel }, { status: 200 });
    } catch (error) {
        console.error("Error updating hotel:", error);
        return NextResponse.json(
            { message: "An error occurred while updating the hotel." },
            { status: 500 }
        );
    }
}
