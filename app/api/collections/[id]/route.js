import dbConnect from "../../../../util/mongo";
import Collection from "../../../models/Collection";

const handler = async (req, res) => {
    const { method, query:{id} } = req;

    await dbConnect();

    if(method === "GET") {
        try{
            const collection = await Collection.findById(id);
            res.status(200).json(collection);
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if(method === "PUT") {
        try{
            const collection = await Collection.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(collection);
        } catch(err) {
            res.status(500).json(err);
        }
    }
    if(method === "DELETE") {}
}

export default handler;