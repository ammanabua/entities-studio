import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Image from '@/src/models/Image'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: Params) {
  await dbConnect()
  try {
    const { id } = await params
    const image = await Image.findById(id)
    return NextResponse.json({ image })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  const res = await req.json()
  try {
    const image = await Image.findByIdAndUpdate(id, res, { new: true })
    return NextResponse.json({ image })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  if (!id) return NextResponse.json({ message: 'Collection Id required' }, { status: 400 })
  try {
    const image = await Image.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Collection successfully deleted', image })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
