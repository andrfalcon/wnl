"use client";
import axios from "axios";
import { useState, useRef } from "react";
import { useStore } from '@/store';

const Study = () => {
  const videoSelected = useStore((state) => state.videoSelected)
  const [subtitles, setSubtitles] = useState(['', '']);
  const videoRef = useRef(null);
  const transcriptionRef = useRef(null);

  const translate = async () => {
    const response = await axios.get(`/api/transcription/${videoSelected}`);
    transcriptionRef.current = response.data.transcription;
    setSubtitles([transcriptionRef.current['0.00'][0], transcriptionRef.current['0.00'][1]]);
    // console.log(response.data);
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const timestamps = Object.keys(transcriptionRef.current).filter(value => value <= currentTime);
      const currentTimestamp = timestamps[timestamps.length - 1];
      setSubtitles([transcriptionRef.current[currentTimestamp][0], transcriptionRef.current[currentTimestamp][1]]);
    }
  }

  return (
    <div>
      <video 
        controls 
        width="600" 
        src={`/api/streaming/${videoSelected}`} 
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
      />
      <button onClick={translate}>Test OpenAI</button>
      <h3>{subtitles[0]}</h3>
      <h3>{subtitles[1]}</h3>
    </div>
  );
};

export default Study;