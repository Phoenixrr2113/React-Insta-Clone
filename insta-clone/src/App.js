import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post_container';
// import SearchBar from './components/SearchBar/search_bar';

class App extends Component {
	state = {
		postData: dummyData,
	};

	render() {
		return (
			<div className="App">
				{/* <SearchBar /> */}

				{this.state.postData.map((el, i) => {
					return <PostContainer posts={el} key={i} />;
				})}
			</div>
		);
	}
}

export default App;
