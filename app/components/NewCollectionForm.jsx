import {useState} from "react";


export default function NewCollectionForm(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("New Art Piece Added");
    }
    return (
        <form className="font-rubik flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="title">
                    Title
                </label>
                <input className="border border-black rounded p-2" type="text" name="title" id="title"
                       placeholder="Mona-Lisa"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="desc">
                    Description
                </label>
                <textarea name="desc" id="desc" className="p-2 border border-black rounded"
                          placeholder="The most famous art work ever"
                          value={description}
                          rows={3}
                          onChange={(e) => setDescription(e.target.value)} required/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="image">
                    Images
                </label>
                <input type="file" name="image" id="image" required/>
            </div>

            <input className="rounded p-2 bg-green-700 text-white" type="submit" value="Create Collection"/>


        </form>
    )
}