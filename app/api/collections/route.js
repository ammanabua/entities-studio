import { NextResponse } from "next/server";
import dbConnect from "../../../util/mongo";
import Collection from "../../models/Collection";


export async function GET () {

    await dbConnect();

    try{

        const collections = await Collection.find();
        console.log('Collections Found!')
        return NextResponse.json({ collections })

    } catch(err){
        console.log("Error")
        return NextResponse.json(err.message);
    }
    

}

export async function POST(request) {

    await dbConnect();

    const res = await request.json();
    

    try{
        const collection = await Collection.create(res);
        console.log('Collection Created!', collection)
        return NextResponse.json({ collection })
    } catch(err){
        console.log('Error', err)
        return NextResponse.json(err.message);
    }
    
}
