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
		searchTerm: '',
	};

	userSearch = event => {
		event.preventDefault();

		if (!this.state.searchTerm) {
			this.setState({
				postData: dummyData,
			});
		} else {
			this.setState({
				postData: this.state.postData.filter(post => {
					return post.username === this.state.searchTerm;
				}),
			});
		}
	};

	onInputChange = event => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<div className="header">
						<div className="logo">
							<i className="fab fa-instagram" />
						</div>
						<div className="search-bar">
							<SearchBar
								inputTerm={this.state.searchTerm}
								handleChange={this.onInputChange}
								userSearch={this.userSearch}
							/>
						</div>
						<div className="profile-icons">ICONS</div>
					</div>

					{this.state.postData.map((el, i) => {
						return <PostContainer posts={el} key={i} />;
					})}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
