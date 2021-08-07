import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import Header from './components/Header';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
               <Header />
               <SearchBar onFormSubmit={this.onTermSubmit} />
               <VideoDetail video={this.state.selectedVideo} />
               <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App
