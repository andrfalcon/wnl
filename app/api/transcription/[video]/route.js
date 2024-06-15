import { NextResponse } from "next/server";
import OpenAI from "openai";
import streamToBlob from "stream-to-blob";
import ytdl from "ytdl-core";
import util from "util";

export async function GET(request, { params }) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const { video } = params;
    const url = `https://www.youtube.com/watch?v=${video}`;    
    const readableStream = ytdl(url);
    const blob = await streamToBlob(readableStream);
    const file = new File([blob], "video.mp4", { type: "video/mp4" });

    const sourceTranscription = (await openai.audio.transcriptions.create({
        file: file,
        model: 'whisper-1',
        response_format: "verbose_json",
        timestamp_granularities: ["segment"],
    })).segments

    console.log(sourceTranscription);

    return NextResponse.json({ message: "hello, world" })
}