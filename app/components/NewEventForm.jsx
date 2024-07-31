import {useState} from "react";


export default function NewEventForm(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("New Event Added");
    }
    return (
        <form className="font-rubik flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="title">
                    Title
                </label>
                <input className="border border-black rounded p-2" type="text" name="title" id="title"
                       placeholder="Tamas Art"
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
                    Image
                </label>
                <input type="file" name="image" id="image" required/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="collection">
                    Event Type
                </label>
                <select className="border border-black rounded p-2" name="collection" id="collection">
                    <option value="none">None</option>
                    <option value="family-portrait">Family Portrait</option>
                    <option value="tamas-art">Tamas Art</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="collection">
                    Time
                </label>
                <input className="p-2 border border-black rounded" type="datetime-local" name="time" id="time"/>
            </div>

            <input className="rounded p-2 bg-green-700 text-white" type="submit" value="Create Event"/>


        </form>
    )
}