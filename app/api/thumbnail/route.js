import axios from 'axios';
import sharp from 'sharp';
import { NextResponse } from "next/server";

export async function POST(req) {
    const url = (await req.json()).url;
    const thumbnail = await axios({
        url,
        responseType: 'arraybuffer',
        method: 'GET',
    });

    const croppedThumbnail = await sharp(thumbnail.data).trim().toBuffer()

    return NextResponse.json({ image: croppedThumbnail.toString('base64') });
}