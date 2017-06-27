import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.state = {
            artistName: '',
            albumTitle: '',
            songTitle: ''
        };
    }

    inputChanged = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    };

    searchSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form onSubmit={this.searchSubmit}>
                <div><input type="text"
                            placeholder="Artist"
                            name="artistName"
                            value={this.state.artistName}
                            onChange={this.inputChanged} /></div>
                <div><input type="text"
                            placeholder="Album"
                            name="albumTitle"
                            value={this.state.albumTitle}
                            onChange={this.inputChanged} /></div>
                <div><input type="text"
                            placeholder="Song"
                            name="songTitle"
                            value={this.state.songTitle}
                            onChange={this.inputChanged} /></div>
                <button>Search</button>
            </form>
        );
    }
}

export default SearchForm;