import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Order from '@/src/models/Order'

export async function GET() {
  await dbConnect()
  try {
    const orders = await Order.find()
    return NextResponse.json({ orders })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  await dbConnect()
  const res = await request.json()
  try {
    const order = await Order.create(res)
    return NextResponse.json({ order })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
