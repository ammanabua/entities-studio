import { NextResponse } from "next/server";
import dbConnect from "../../../util/mongo";
import Collection from "../../models/Collection";


export async function GET () {

    await dbConnect();

    return NextResponse.json({ "message": "You have reached the GET Route"})

}


// export async function GET (request) {
    
//     await dbConnect();

//     const { method } = request
    
//     try{
//         const collections = await Collection.find();
//         NextResponse.json({collections})
//     } catch(err) {
//         NextResponse.json({err})
//     }


    
// }


// export async function POST (req, res) {
//     const { method } = req;

//     await dbConnect();


//     try{
//         const collection = await Collection.create(req.body);
//         NextResponse.json({collection})
//     } catch(err) {
//         NextResponse.json({err})
//     }

    // if(method === "GET") {
    //     try{
    //         const collections = await Collection.find();
    //         NextResponse.json(collections)
    //     } catch(err) {
    //         NextResponse.json(err)
    //     }
    // }
// }
