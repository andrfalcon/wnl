"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useStore } from '@/store';

const Study = () => {
  const videoSelected = useStore((state) => state.videoSelected)
  const translate = async () => {
    const response = await axios.get(`/api/transcription/${videoSelected}`);
    console.log(response.data);
  }
  return (
    <div>
      <video controls width="600" src={`/api/streaming/${videoSelected}`} />
      <button onClick={translate}>Test OpenAI</button>
    </div>
  );
};

export default Study;