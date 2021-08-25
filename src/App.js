import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import Header from './components/Header';
import VideoDetail from './components/VideoDetail';

const App = () => {
    const [ videos, setVideos ] = useState([]);
    const [ selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('react')
    }, []);

    const onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="ui container">
           <Header />
           <SearchBar onFormSubmit={onTermSubmit} />
           <div className="ui grid">
               <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
           </div>
        </div>
    );
};

export default App
