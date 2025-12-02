import { useState } from 'react'

export default function NewArtForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      title,
      description,
      // image: undefined,
      price
    }

    const response = await fetch('/api/images', {
      method: 'POST',
      body: data as any
    })
    alert('New Art Piece Added')
  }
  return (
    <form className="font-rubik text-sm flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          className="border border-black rounded p-2"
          type="text"
          name="title"
          id="title"
          placeholder="Mona-Lisa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="desc">Description</label>
        <textarea
          name="description"
          id="description"
          className="p-2 border border-black rounded"
          placeholder="The most famous art work ever"
          value={description}
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" required />
      </div>

      <div className="flex flex-col">
        <label htmlFor="collection">Collection</label>
        <select className="border border-black rounded p-2" name="collection" id="collection">
          <option value="none">None</option>
          <option value="family-portrait">Family Portrait</option>
          <option value="tamas-art">Tamas Art</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <input className="border border-black rounded p-2" placeholder="£5,000" type="number" />
      </div>

      <input className="rounded p-2 bg-green-700 text-white" type="submit" value="Create Art" />
    </form>
  )
}
