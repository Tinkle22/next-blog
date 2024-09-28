import mongoose from "mongoose";
import { ConnectDB } from "../../../../lib/config/db";
import EmailModel from "../../../../lib/models/EmailModel";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectDB
        const emailCount = await EmailModel.countDocuments();
        return NextResponse.json({emailCount});
    } catch (error) {
        return NextResponse.json({error: 'Error counting emails'})
    }
}