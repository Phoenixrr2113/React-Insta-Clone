import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/css/index.css';

import 'bootstrap/dist/css/bootstrap.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post_container';
import SearchBar from './components/SearchBar/search_bar';

class App extends Component {
	state = {
		postData: dummyData,
	};

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<SearchBar posts={this.state.postData} />

					{this.state.postData.map((el, i) => {
						return <PostContainer posts={el} key={i} />;
					})}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
