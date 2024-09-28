import { NextResponse } from 'next/server';
import BlogModel from '../../../../lib/models/BlogModel';
import { ConnectDB } from '../../../../lib/config/db';
import mongoose from 'mongoose';


export async function GET() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const count = await BlogModel.countDocuments();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ error: 'Error counting blog posts' }, { status: 201 });
  }
}