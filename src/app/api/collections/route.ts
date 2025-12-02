import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Collection from '@/src/models/Collection'

export async function GET() {
  await dbConnect()
  try {
    const collections = await Collection.find()
    return NextResponse.json({ collections })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  await dbConnect()
  const res = await request.json()
  try {
    const collection = await Collection.create(res)
    return NextResponse.json({ collection })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
