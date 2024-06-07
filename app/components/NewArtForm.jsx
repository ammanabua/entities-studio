import {useState} from "react";


export default function NewArtForm(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("New Art Piece Added");
    }
    return(
        <form className="font-rubik flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="title">
                Title
            </label>
            <input type="text" name="title" id="title" placeholder="Mona-Lisa"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)} required/>

            <label htmlFor="desc">
                Description
            </label>
            <textarea name="desc" id="desc" placeholder="The most famous art work ever"
                     value={description}
                      rows={3}
                     onChange={(e) => setDescription(e.target.value)} required />

            <label htmlFor="image">
                Image
            </label>
            <input type="file" name="image" id="image" required/>

            <label htmlFor="collection">
                Collection
            </label>
            <select name="collection" id="collection">
                <option value="none">No Collection</option>
                <option value="family-portrait">Family Portrait</option>
                <option value="tamas-art">Tamas Art</option>
            </select>

            <input type="submit" value="Create Art"/>


        </form>
    )
}