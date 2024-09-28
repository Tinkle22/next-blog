import { ConnectDB } from "../../../lib/config/db"

import BlogModel from "../../../lib/models/BlogModel";
// const { NextResponse } = require("next/server")
import { NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import mongoose from "mongoose";



const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads');

mongoose.connect(process.env.MONGO_URI);




export async function POST(request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const firstSegment = formData.get('firstSegment');
    const secondSegment = formData.get('secondSegment');
    const category = formData.get('category');
    const author = formData.get('author');
    const image = formData.get('image');
    const authorImg = formData.get('authorImg');

    if (!title || !firstSegment || !secondSegment || !category || !author || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Handle image upload
    const imageFilename = `${Date.now()}-${image.name}`;
    const imagePath = join(UPLOAD_DIR, imageFilename);
    await writeFile(imagePath, Buffer.from(await image.arrayBuffer()));

    // Handle author image upload if provided
    let authorImgPath = '';
    if (authorImg) {
      const authorImgFilename = `${Date.now()}-${authorImg.name}`;
      authorImgPath = join(UPLOAD_DIR, authorImgFilename);
      await writeFile(authorImgPath, Buffer.from(await authorImg.arrayBuffer()));
    }

    // Create new blog post
    const newBlog = new BlogModel({
      title,
      firstSegment,
      secondSegment,
      category,
      author,
      image: `/uploads/${imageFilename}`,
      authorImg: authorImgPath ? `/uploads/${authorImgPath.split('/').pop()}` : '',
    });

    await newBlog.save();

    return NextResponse.json({ message: 'Blog post created successfully', blog: newBlog });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating blog post' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const blog = await BlogModel.findById(id);
      if (!blog) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find().sort({ date: -1 });
      return NextResponse.json(blogs);
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error retrieving blog posts' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const formData = await request.formData();
    const id = formData.get('id');
    const title = formData.get('title');
    const firstSegment = formData.get('firstSegment');
    const secondSegment = formData.get('secondSegment');
    const category = formData.get('category');
    const author = formData.get('author');
    const image = formData.get('image');
    const authorImg = formData.get('authorImg');

    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Update fields if provided
    if (title) blog.title = title;
    if (firstSegment) blog.firstSegment = firstSegment;
    if (secondSegment) blog.secondSegment = secondSegment;
    if (category) blog.category = category;
    if (author) blog.author = author;

    // Handle image update
    if (image) {
      const imageFilename = `${Date.now()}-${image.name}`;
      const imagePath = join(UPLOAD_DIR, imageFilename);
      await writeFile(imagePath, Buffer.from(await image.arrayBuffer()));
      
      // Delete old image
      if (blog.image) {
        const oldImagePath = join(process.cwd(), 'public', blog.image);
        await unlink(oldImagePath);
      }
      
      blog.image = `/uploads/${imageFilename}`;
    }

    // Handle author image update
    if (authorImg) {
      const authorImgFilename = `${Date.now()}-${authorImg.name}`;
      const authorImgPath = join(UPLOAD_DIR, authorImgFilename);
      await writeFile(authorImgPath, Buffer.from(await authorImg.arrayBuffer()));
      
      // Delete old author image
      if (blog.authorImg) {
        const oldAuthorImgPath = join(process.cwd(), 'public', blog.authorImg);
        await unlink(oldAuthorImgPath);
      }
      
      blog.authorImg = `/uploads/${authorImgFilename}`;
    }

    await blog.save();

    return NextResponse.json({ message: 'Blog post updated successfully', blog });
  } catch (error) {
    return NextResponse.json({ error: 'Error updating blog post' }, { status: 500 });
  }
}