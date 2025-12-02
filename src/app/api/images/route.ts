import { NextResponse } from 'next/server'
import dbConnect from '@/src/util/mongo'
import Image from '@/src/models/Image'

export async function GET() {
  await dbConnect()

  try {
    const images = await Image.find()
    return NextResponse.json({ images })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  await dbConnect()

  const res = await request.json()

  try {
    const image = await Image.create(res)
    return NextResponse.json({ image })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
