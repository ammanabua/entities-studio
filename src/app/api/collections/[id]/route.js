import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Collection from "@/src/models/Collection";


export async function GET(req, { params }){

    await dbConnect();

    try{

        const collection = await Collection.findById(params.id)
        return NextResponse.json(collection)
    } catch (err) {
        console.log("Error: " + err)
        return NextResponse.json(err)
    }    
    
}

export async function PUT(req, { params }){
    await dbConnect();

    const { id } = params

    const res = await req.json();

    try{
        const collection = await Collection.findByIdAndUpdate(id, res, { new: true,});
        console.log('Collection Updated!')
        NextResponse.json({ collection })
    } catch(err) {
        console.log("Error: ")
        return NextResponse.json(err.message)
    }
}

export async function DELETE(req, { params }){
    await dbConnect()

    const { id } = params

    if(!id) return NextResponse.json({"message": "Collection Id required"});

    try{
        const collection = await Collection.findByIdAndDelete(id);
        
        return NextResponse.json({"message": "Collection successfully deleted", collection});

    } catch (err) {
        console.log("Error")
        return NextResponse.json(err.message);
    }
    
}