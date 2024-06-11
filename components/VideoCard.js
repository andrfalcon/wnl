/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useState, useEffect } from 'react';
import youtubeLogo from "@/app/youtubeLogo.png";
import tokens from "@/app/tokens.png";
import Image from "next/image";

// https://i.ytimg.com/vi/snMlEdlQzNA/hqdefault.jpg
const VideoCard = (props) => {
    const [imageSrc, setImageSrc] = useState('');
    useEffect(() => {
        async function fetchThumbnail() {
            const response = await axios.post("/api/thumbnail", { url: props.thumbnail });
            // console.log(response);
            setImageSrc(`data:image/png;base64,${response.data.image}`)
        }
        fetchThumbnail();
    }, []);
    return (
        <div className="flex flex-row py-8">
            <div className="flex flex-col items-center">
                <img 
                    src={imageSrc}
                    alt="thumbnail"
                    width={480 / 2}
                    height={360 / 2} 
                    className="rounded-lg"
                />
                <p className="text-sm">{props.channel} • June 12th, 2024 </p>
                <div className="flex flex-row items-center">
                    <Image
                        src={tokens}
                        width={25} 
                        alt="tokens"
                    />
                    <p className="text-md px-1">643 tokens</p>
                    <button className="bg-transparent border-none cursor-pointer">
                        <Image 
                            src={youtubeLogo}
                            width={30}
                            alt="youtube logo"
                            onClick={() => window.open(props.link)}
                        />
                    </button>
                </div>
            </div>
            <div className="w-1/4 pl-5">
                <h2 className="font-semibold text-lg text-white">{props.title}</h2>
                <hr className="border-neutral mt-2" />
                <p className="text-sm pt-2">{props.description}</p>
            </div>
        </div>
    )
}

export default VideoCard;