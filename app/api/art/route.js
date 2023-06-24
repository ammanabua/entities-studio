import { NextResponse } from "next/server";
import dbConnect from "../../../util/mongo";
import Art from "../../models/Art";


export async function GET () {

    await dbConnect();

    try{

        const art = await Art.find();
        console.log('Images Found!')
        return NextResponse.json({ art })

    } catch(err){
        console.log("Error")
        return NextResponse.json(err.message);
    }
    

}

export async function POST(request) {

    await dbConnect();

    const res = await request.json();
    

    try{
        const art = await Art.create(res);
        console.log('Image Created!', art)
        return NextResponse.json({ art })
    } catch(err){
        console.log('Error', err)
        return NextResponse.json(err.message);
    }
    
}
