//imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
	// Here we want to initialize an empty state
	state = { albums: [] };

	componentWillMount() {
		// This will go 'GET' the data via api and set the state
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(a => 
			<AlbumDetail key={a.title} data={a} />
		);
	}

	render() {
		console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;

// use props for parent to child communication
// state is for a component's record keeping
