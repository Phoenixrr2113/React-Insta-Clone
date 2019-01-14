import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post_container';
import CommentSection from './components/CommentSection/comment_section';
import SearchBar from './components/SearchBar/search_bar';

class App extends Component {
	state = {
		postData: dummyData,
	};

	keyGen() {
		return Math.random();
	}

	render() {
		const posts = this.state.postData.map(el => {
			return <div key={this.keyGen()}>{el}</div>;
		});
		return (
			<div className="App">
				<PostContainer posts={posts} key={this.keyGen()} />
				<CommentSection />
				<SearchBar />
			</div>
		);
	}
}

export default App;
