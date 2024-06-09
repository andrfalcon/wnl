'use client'
// import { useEffect } from "react";
import { useStore } from '@/store';

const Results = () => {
  const searchResults = useStore((state) => state.searchResults)
  return (
    <>
      <div>This page displays the search results.</div>
      <button onClick={() => console.log(searchResults)}>Test</button>
    </>
  )
}

export default Results;