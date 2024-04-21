import { NextResponse } from "next/server";
import { connectMongoDB } from "@/db/mongoDB";
import Hotel from "@/models/hotel.model";

export async function GET() {
    try {
        await connectMongoDB();
        const hotels = await Hotel.find();
        return NextResponse.json({ hotels }, { status: 200 });
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching hotels." },
            { status: 500 }
        );
    }
}
