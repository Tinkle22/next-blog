import { NextResponse } from 'next/server';
import BlogModel from '../../../../lib/models/BlogModel';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const latestPosts = await BlogModel.find()
      .sort({ date: -1 })  // Sort by date in descending order
      .limit(3)            // Limit to 3 posts
      .select('title author date');  // Select only necessary fields

    return NextResponse.json(latestPosts);
  } catch (error) {
    console.error('Error fetching latest blog posts:', error);
    return NextResponse.json({ error: 'Error fetching latest blog posts' }, { status: 500 });
  }
}