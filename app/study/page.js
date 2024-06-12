"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useStore } from '@/store';

const Study = () => {
  const videoSelected = useStore((state) => state.videoSelected)
  return (
    <video controls width="600" src={`/api/streaming/${videoSelected}`} />
  );
};

export default Study;