'use client'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store';

const SearchForm = (props) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const updateSearchResults = useStore((state) => state.updateSearchResults);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = async () => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(searchTerm)}&relevanceLanguage=${props.languageCode}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
        updateSearchResults(response.data.items);
        router.push('/results');
    }

    return (
        <div className="flex">
            <input 
                type="text" 
                className="w-full p-3 border border-gray-700 bg-neutral text-white rounded-lg" 
                placeholder="Search for a video" 
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchForm;