import { NextResponse } from "next/server";
import dbConnect from "../../../util/mongo";
import Order from "@/src/models/Order";


export async function GET () {

    await dbConnect();

    try{

        const orders = await Order.find();
        console.log('Orders Found!')
        return NextResponse.json({ orders })

    } catch(err){
        console.log("Error")
        return NextResponse.json(err.message);
    }
    

}

export async function POST(request) {

    await dbConnect();

    const res = await request.json();
    

    try{
        const order = await Order.create(res);
        console.log('Image Created!', order)
        return NextResponse.json({ order })
    } catch(err){
        console.log('Error', err)
        return NextResponse.json(err.message);
    }
    
}
