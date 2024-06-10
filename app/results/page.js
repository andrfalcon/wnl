'use client'
import { useEffect } from "react";
import { useStore } from '@/store';
import he from 'he';
import Header from '@/components/Header';
import VideoCard from "@/components/VideoCard";

const Results = () => {
  const searchResults = useStore((state) => state.searchResults)
  // useEffect(() => {
  //   console.log(searchResults)
  // }, [])
  return (
    <>
      <Header />
      <VideoCard />
    </>
  )
}

export default Results;

{/* <div className="grid grid-cols-5 gap-4">
{searchResults.map((result, index) => (
  <div key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg">
    <img 
      src={result.snippet.thumbnails.high.url} 
      alt={he.decode(result.snippet.title)} 
    />

    <h3 className="text-xl font-semibold text-gray-300">{he.decode(result.snippet.title)}</h3>
    <p className="text-gray-400">{he.decode(result.snippet.description)}</p>
  </div>
))}
</div> */}