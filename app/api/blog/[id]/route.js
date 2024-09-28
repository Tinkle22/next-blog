import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import BlogModel from '../../../../lib/models/BlogModel';

// Ensure database connection
mongoose.connect(process.env.MONGO_URI);

export async function GET(request, { params }) {
  try {
    const { _id } = params;

    if (!_id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error retrieving blog post:', error);
    return NextResponse.json({ error: 'Error retrieving blog post' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const formData = await request.formData();

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Update fields if provided
    const fieldsToUpdate = ['title', 'firstSegment', 'secondSegment', 'category', 'author'];
    fieldsToUpdate.forEach(field => {
      const value = formData.get(field);
      if (value) blog[field] = value;
    });

    // Handle image and authorImg updates
    const imageFields = ['image', 'authorImg'];
    for (const field of imageFields) {
      const file = formData.get(field);
      if (file) {
        const filename = `${Date.now()}-${file.name}`;
        const path = `/uploads/${filename}`;
        
        // In a real-world scenario, you'd save the file here
        // For this example, we'll just update the path
        blog[field] = path;
      }
    }

    await blog.save();

    return NextResponse.json({ message: 'Blog post updated successfully', blog });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Error updating blog post' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const blog = await BlogModel.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // In a real-world scenario, you'd also delete associated files here

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Error deleting blog post' }, { status: 500 });
  }
}