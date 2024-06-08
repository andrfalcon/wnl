'use client'
import axios from 'axios';
import { NEXT_CACHE_TAGS_HEADER } from 'next/dist/lib/constants';
import { useState } from 'react';

const SearchForm = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = async () => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(searchTerm)}&relevanceLanguage=${props.languageCode}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
        console.log(response);
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