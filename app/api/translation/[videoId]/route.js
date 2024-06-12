import ytdl from "ytdl-core"
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { videoId } = params;
    const url = `https://www.youtube.com/watch?v=${videoId}`;

    const range = request.headers.get('range');
    const videoInfo = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' });

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : format.contentLength - 1;
      const chunkSize = (end - start) + 1;

      const headers = {
        'Content-Range': `bytes ${start}-${end}/${format.contentLength}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': 'video/mp4',
      };

      const videoStream = ytdl(url, {
        format,
        range: { start, end }
      });

      return new Response(videoStream, {
        headers,
        status: 206,
      });
    } else {
      const headers = {
        'Content-Length': format.contentLength,
        'Content-Type': 'video/mp4',
      };

      const videoStream = ytdl(url, { format });

      return new Response(videoStream, {
        headers,
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to stream video' }, { status: 500 });
  }
}


