import { NextResponse } from "next/server";
import OpenAI from "openai";
import streamToBlob from "stream-to-blob";
import ytdl from "ytdl-core";
import * as deepl from 'deepl-node';

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

    const translator = new deepl.Translator(process.env.NEXT_PUBLIC_DEEPL_KEY);

    const targetTranscription = [];

    for (let i=0; i<sourceTranscription.length; i++) {
        targetTranscription.push((await translator.translateText(sourceTranscription[i].text, 'fr', 'en-US')).text);
    }

    console.log(targetTranscription);

    return NextResponse.json({ message: "hello, world" })
}