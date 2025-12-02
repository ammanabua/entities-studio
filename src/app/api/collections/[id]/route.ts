import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Collection from '@/src/models/Collection'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: Params) {
  await dbConnect()
  try {
    const { id } = await params
    const collection = await Collection.findById(id)
    return NextResponse.json(collection)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  const res = await req.json()
  try {
    const collection = await Collection.findByIdAndUpdate(id, res, { new: true })
    return NextResponse.json({ collection })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  if (!id) return NextResponse.json({ message: 'Collection Id required' }, { status: 400 })
  try {
    const collection = await Collection.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Collection successfully deleted', collection })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
