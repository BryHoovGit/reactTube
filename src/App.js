import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import Header from './components/Header';

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
               <Header />
               <SearchBar onFormSubmit={this.onTermSubmit} />
               <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App
