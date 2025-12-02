import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Event from '@/src/models/Event'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params
  await dbConnect()
  try {
    const event = await Event.findById(id)
    return NextResponse.json(event)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  const res = await req.json()
  if (!id) return NextResponse.json({ message: 'Event ID required!' }, { status: 400 })
  try {
    const event = await Event.findByIdAndUpdate(id, res, { new: true })
    return NextResponse.json({ event })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  if (!id) return NextResponse.json({ message: 'Id required' }, { status: 400 })
  try {
    const event = await Event.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Event successfully deleted', event })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
