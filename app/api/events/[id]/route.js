import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Event from "../../../models/Event";
import Collection from "@/app/models/Collection";


export async function GET(req, { params }){

    const { id } = params;

    await dbConnect();

    try{

        const event = await Event.findById(id)
        console.log('Event Found!')
        return NextResponse.json(event)
    } catch (err) {
        console.log("Error: ")
        return NextResponse.json(err.message)
    }    
    
}

export async function PUT(req, { params }){
    await dbConnect();

    const { id } = params;

    const res = await req.json()

    if(!id) return NextResponse.json({ "message": "Event ID required!"})

    try{
        const event = await Event.findByIdAndUpdate(id, res, { new: true,});
        console.log('Event Updated!')
        return NextResponse.json({ event })
    } catch(err) {
        console.log("Error: ")
        return NextResponse.json(err.message)
    }
}

export async function DELETE(req, { params }){
    await dbConnect()

    const { id } = params

    if(!id) return NextResponse.json({"message": "Id required"});

    try{
        const event = await Event.findByIdAndDelete(id);
        
        return NextResponse.json({"message": "Event successfully deleted", event});

    } catch (err) {
        console.log("Error")
        return NextResponse.json(err.message);
    }
    
}