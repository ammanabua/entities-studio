import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Collection from "../../../models/Collection";


export async function GET(req, { params }){

    await dbConnect();

    try{

        const collection = await Collection.findById(params.id)
        return NextResponse.json(collection)
    } catch (err) {
        console.log("Error: ")
        return NextResponse.json({ collection })
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