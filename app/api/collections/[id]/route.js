import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../util/mongo";
import Collection from "../../../models/Collection";

// const handler = async (req, res) => {
//     const { method, query:{id} } = req;

//     await dbConnect();

//     if(method === "GET") {
//         try{
//             const collection = await Collection.findById(id);
//             res.status(200).json(collection);
//         } catch(err) {
//             res.status(500).json(err);
//         }
//     }

//     if(method === "PUT") {
//         try{
//             const collection = await Collection.findByIdAndUpdate(id, req.body, {
//                 new: true,
//             });
//             res.status(200).json(collection);
//         } catch(err) {
//             res.status(500).json(err);
//         }
//     }
//     if(method === "DELETE") {}
// }


export async function GET(req){

    
    await dbConnect();

    
    return new NextResponse({ req });
    // try{
    //     const collection = await Collection.findById(collectionId);
    //     NextResponse.json({ collection })
    // } catch (err){
    //     NextResponse.json({ err })
    // }

    // return new NextResponse({ req }) 
}

export async function PUT(req, res){
    await dbConnect();

    

    try{
        const collection = await Collection.findByIdAndUpdate(id, req.body, { new: true,});
        NextResponse.status(200).json({ collection })
    } catch(err) {
        NextResponse.status(500).json({ err })
    }
}