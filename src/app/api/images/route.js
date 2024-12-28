import { NextResponse } from "next/server";
import dbConnect from "../../../util/mongo";
import Image from "@/src/models/Image";


export async function GET () {

    await dbConnect();

    try{

        const images = await Image.find();
        console.log('Images Found!')
        return NextResponse.json({ images })

    } catch(err){
        console.log("Error")
        return NextResponse.json(err.message);
    }
    

}

export async function POST(request) {

    await dbConnect();

    const res = await request.json();
    

    try{
        const image = await Image.create(res);
        console.log('Image Created!', image)
        return NextResponse.json({ image })
    } catch(err){
        console.log('Error', err)
        return NextResponse.json(err.message);
    }
    
}
