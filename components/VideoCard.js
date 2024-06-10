import axios from 'axios';
import { useState, useEffect } from 'react';

const VideoCard = () => {
    const [imageSrc, setImageSrc] = useState('');
    useEffect(() => {
        async function fetchThumbnail() {
            const response = await axios.post("/api/thumbnail", { url: "https://i.ytimg.com/vi/snMlEdlQzNA/hqdefault.jpg" });
            console.log(response);
            setImageSrc(`data:image/png;base64,${response.data.image}`)
        }
        fetchThumbnail();
    }, []);
    return (
        <div className="flex flex-row">
            <div>
                <img 
                    src={imageSrc}
                    width={480}
                    height={360} 
                />
                <p>12.9K views • June 12th, 2024 </p>
                
            </div>
            <div>
                <h2>Pourquoi la Palestine est condamnée : les arguments dIsraël en faveur de la destruction massive</h2>
                <hr
                    style={{
                        height: 5
                    }}
                />
                <p>Lorem impsum sonor denet lorum ipsum sonor denet. Lorem impsum sonor denet lorum ipsum sonor denet. Lorem impsum sonor denet lorum ipsum sonor denet.</p>
            </div>
        </div>
    )
}

export default VideoCard;