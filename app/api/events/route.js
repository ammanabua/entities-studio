import { NextResponse } from "next/server";
import dbConnect from "../../../util/mongo";
import Event from "../../models/Event";


export async function GET () {

    await dbConnect();

    try{
        const events = await Event.find();
        return NextResponse.json({ events })
    } catch (err){
        return NextResponse.json({ err })
    }

}

export async function POST(request) {

    await dbConnect();
    
    const res = await request.json();

    
    const event = await Event.create(res);

    return NextResponse.json({ event });

}
