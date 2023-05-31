import dbConnect from "../../../util/mongo";
import Collection from "../../../models/Collection";

const handler = async (req, res) => {
    const { method } = req;

    await dbConnect();

    if(method === "GET") {
        try{
            const collections = await Collection.find();
            res.status(200).json(collections)
        } catch(err) {
            res.status(500).json(err)
        }
    }
    
    if(method === "POST") {
        try{
            const collection = await Collection.create(req.body);
            res.status(201).json(collection)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

export default handler;