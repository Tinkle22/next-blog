import { ConnectDB } from "../../../../lib/config/db"
import { writeFile  } from "fs/promises";
import BlogModel from "../../../../lib/models/BlogModel";
const { NextResponse } = require("next/server")


const loadDB = async () => {
    await ConnectDB();
}

loadDB()

export async function GET(request) {  
    return NextResponse.json({msg:"api working"})
}

export async function POST(request){

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`

        // const blogData ={
        //     title: `${formData.get('title')}`,
        //     author: `${formData.get('author')}`,
        //     firstSegment: `${formData.get('firstSegment')}`,
        //     secondSegment: `${formData.get('secondSegment')}`,
        //     image: `${imgUrl}`,
        //     authorImg:`${formData.get('authorImg')}`,
        //     category: `${formData.get('category')}`
        // }    

        // await BlogModel.create(blogData);
        // console.log('blog saved')
    return NextResponse.json({imgUrl},{success: true, msg:"blog added"})
}
