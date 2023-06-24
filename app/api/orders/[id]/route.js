import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Order from "../../../models/Order";


export async function GET(req, { params }){

    await dbConnect();

    try{

        const order = await Order.findById(params.id)
        return NextResponse.json(order)
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
        const order = await Order.findByIdAndUpdate(id, res, { new: true,});
        console.log('Order Updated!')
        NextResponse.json({ art })
    } catch(err) {
        console.log("Error: ")
        return NextResponse.json(err.message)
    }
}

export async function DELETE(req, { params }){
    await dbConnect()

    const { id } = params

    if(!id) return NextResponse.json({"message": "Order Id required"});

    try{
        const art = await Order.findByIdAndDelete(id);
        
        return NextResponse.json({"message": "Order successfully deleted", art});

    } catch (err) {
        console.log("Error")
        return NextResponse.json(err.message);
    }
    
}