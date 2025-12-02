import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Order from '@/src/models/Order'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: Params) {
  await dbConnect()
  try {
    const { id } = await params
    const order = await Order.findById(id)
    return NextResponse.json(order)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  const res = await req.json()
  try {
    const order = await Order.findByIdAndUpdate(id, res, { new: true })
    return NextResponse.json({ order })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  await dbConnect()
  const { id } = await params
  if (!id) return NextResponse.json({ message: 'Order Id required' }, { status: 400 })
  try {
    const order = await Order.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Order successfully deleted', order })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
