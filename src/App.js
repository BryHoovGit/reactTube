import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';

class App extends React.Component {
    onTermSubmit = async term => {
        youtube.get('/search', {
            params: {
                q: await term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
               <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App
