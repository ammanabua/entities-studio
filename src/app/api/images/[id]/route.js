import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Image from "@/src/models/Image";


export async function GET(req, { params }){

    await dbConnect();

    try{

        const image = await Image.findById(params.id)
        return NextResponse.json({ image })
    } catch (err) {
        console.log("Error: ")
        return NextResponse.json(err.message)
    }    
    
}

export async function PUT(req, { params }){
    await dbConnect();

    const { id } = params

    const res = await req.json();

    try{
        const image = await Image.findByIdAndUpdate(id, res, { new: true,});
        console.log('Collection Updated!')
        NextResponse.json({ image })
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
        const art = await Art.findByIdAndDelete(id);
        
        return NextResponse.json({"message": "Collection successfully deleted", art});

    } catch (err) {
        console.log("Error")
        return NextResponse.json(err.message);
    }
    
}