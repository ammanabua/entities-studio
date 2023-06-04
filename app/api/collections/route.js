import { NextResponse } from "next/server";
import dbConnect from "../../../util/mongo";
import Collection from "../../models/Collection";


export async function GET () {

    await dbConnect();

    // const res = await fetch('http://localhost:3000/api/collections');

    // const collections = await res.json()

    // return NextResponse(collections);

    try{
        const collections = await Collection.find();
        return NextResponse.json({ collections })
    } catch (err){
        return NextResponse.json({ err })
    }

    // return NextResponse.json({"message": "We are on the GET ROUTE"})

}

export async function POST(request) {

    await dbConnect();
    
    const res = await request.json();

    
    const collection = await Collection.create(res);

    return NextResponse.json({ collection });

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
