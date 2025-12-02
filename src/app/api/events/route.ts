import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Event from '@/src/models/Event'

export async function GET() {
  await dbConnect()
  try {
    const events = await Event.find()
    return NextResponse.json({ events })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  await dbConnect()
  const res = await request.json()
  try {
    const event = await Event.create(res)
    return NextResponse.json({ event })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
