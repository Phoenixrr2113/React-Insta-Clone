import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/css/index.css';
// import Login from './components/Login/Login';

import 'bootstrap/dist/css/bootstrap.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post_container';
import SearchBar from './components/SearchBar/search_bar';
import Auth from './Authentication/Auth';

class App extends Component {
	state = {
		postData: [],
		searchTerm: '',
		newComment: '',
		filteredUser: [],
		loginName: '',
		password: '',
	};

	componentDidMount() {
		this.setState({ postData: dummyData });
	}

	userSearch = event => {
		event.preventDefault();

		let typedKey = event.target.value;
		let filteredUser = this.state.postData.filter(item => {
			return item.username.indexOf(typedKey) > -1;
		});
		this.setState({
			filteredUser,
		});
	};

	addNewComment = event => {
		event.preventDefault();
		// this.setState({
		// postData: this.state.postData.map(user => {
		// 	return user.comments.push({
		// 		username: 'Randy-Wilson',
		// 		text: this.state.newComment,
		// 	});
		// }),
		// });

		// Object.assign({
		// 	username: 'Randy-Wilson',
		// 	text: this.state.newComment
		// },)
	};

	addNewPost = event => {
		event.preventDefault();
		this.setState({
			postData: [
				...this.state.postData,
				{
					username: 'Randy-Wilson',
					thumbnailUrl: '',
					imageUrl: '',
					likes: 0,
					timestamp: Date.now(),
					comments: [],
				},
			],
		});
	};

	onInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<MuiThemeProvider>
				<Auth>
					{/* <div>
						<Login />
					</div> */}
					<div className="App">
						<div className="header">
							<div className="logo">
								<i className="fab fa-instagram" />
								<img
									className="logo-img"
									src="./img/1200px-insta-clone/src/img/1200px-Instagram_logo.svg.png.svg.png"
									alt=""
								/>
							</div>
							<div className="search-bar">
								<SearchBar userSearch={this.userSearch} />
							</div>
							<div className="profile-icons">
								<i className="far fa-compass" />
								<i className="far fa-heart" />
								<i className="far fa-user" />
							</div>
						</div>
						{this.state.filteredUser.length === 0
							? this.state.postData.map((el, i) => {
									return (
										<PostContainer
											inputTerm={this.state.newComment}
											addComment={this.addNewComment}
											handleChange={this.onInputChange}
											posts={el}
											key={i}
										/>
									);
							  })
							: this.state.filteredUser.map((el, i) => {
									return (
										<PostContainer
											inputTerm={this.state.newComment}
											addComment={this.addNewComment}
											handleChange={this.onInputChange}
											posts={el}
											key={i}
										/>
									);
							  })}
					</div>
				</Auth>
			</MuiThemeProvider>
		);
	}
}

export default App;
