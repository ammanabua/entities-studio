import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Art from "../../../models/Art";


export async function GET(req, { params }){

    await dbConnect();

    try{

        const art = await Art.findById(params.id)
        return NextResponse.json(art)
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
        const art = await Art.findByIdAndUpdate(id, res, { new: true,});
        console.log('Collection Updated!')
        NextResponse.json({ art })
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