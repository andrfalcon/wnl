'use client'
import { useStore } from '@/store';
import Header from '@/components/Header';
import VideoCard from "@/components/VideoCard";
import { useRouter } from 'next/navigation';

const Results = () => {
  const router = useRouter();
  const searchResults = useStore((state) => state.searchResults)
  const updateVideoSelected = useStore((state) => state.updateVideoSelected);

  const handleWatch = (videoId) => {
    updateVideoSelected(videoId);
    router.push('/study');
  }
  return (
    <>
      <Header />
      {searchResults.map((result, index) => (
          <button
            key={index}
            onClick={() => handleWatch(result.id.videoId)}
            className="opacity-75 hover:opacity-100 transition-opacity duration-200"
          >
              <VideoCard 
                title={result.snippet.title}
                description={result.snippet.description}
                date={result.snippet.publishedAt}
                channel={result.snippet.channelTitle}
                thumbnail={result.snippet.thumbnails.high.url}
                link={`https://www.youtube.com/watch?v=${result.id.videoId}`}
                key={index}
              />
          </button>
      ))
      }
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