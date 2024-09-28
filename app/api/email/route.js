import { error } from "console";
import mongoose from "mongoose";
import { idText } from "typescript";
const { NextResponse } = require("next/server");
const { default: EmailModel } = require("../../../lib/models/EmailModel");

mongoose.connect(process.env.MONGO_URI);

export async function POST(request) {
    try {
        const formData = await request.formData();
        const email = formData.get('email');

        if (!email) {
            return NextResponse.json({error: 'Missing required fields'}, {status: 400});
        }

        // add email
        const newEmail = new EmailModel({
            email
        })

        await newEmail.save();
        return NextResponse.json({message: 'Email added successfully'})
    } catch (error) {
        return NextResponse.json({error: 'Error Adding Email'})
    }
}

async function Get(request) {
    try {
        const {searchParams} = new URL(request.url);
        const id = searchParams.get('id')

        if (id) {
            const email = await EmailModel.findById(id);
            if (!email) {
                return NextResponse.json({error: 'email not found'})
            }
            return NextResponse.json(email)
        }else{
            const emails = await EmailModel.find().sort({date: -1});
            return NextResponse.json(emails)
        }
    } catch (error) {
        return NextResponse.json({error:  'Error retrieving email'})
    }
}