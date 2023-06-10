import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Event from "../../../models/Event";


export async function GET(req, { params }){

    await dbConnect();

    try{

        const event = await Event.findById(params.id)
        console.log('Event Found!')
        return NextResponse.json(event)
    } catch (err) {
        console.log("Error: ")
        return NextResponse.json(err.message)
    }    
    
}

export async function PUT(req, { params }){
    await dbConnect();

    try{
        const collection = await Collection.findByIdAndUpdate(id, req.body, { new: true,});
        console.log('Collection Updated!')
        NextResponse.json({ collection })
    } catch(err) {
        console.log("Error: ")
        return NextResponse.json(err.message)
    }
}

export async function DELETE(req, { params }){
    await dbConnect()

    
}