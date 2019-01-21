// import React from 'react';

// const Auth = props => {
// 	const pass = 'password123';

// 	if (pass !== 'password123') {
// 		return (
// 			<div className="wrong-password">
// 				<h3>You are not authorized</h3>
// 			</div>
// 		);
// 	} else {
// 		return props.children;
// 	}
// };

// export default Auth;

import React from 'react';

const authenticate = PostsPage => LoginPage =>
	class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loggedIn: false,
			};
		}
		componentDidMount() {
			if (!localStorage.getItem('user')) {
				this.setState({ loggedIn: false });
			} else {
				this.setState({ loggedIn: true });
			}
		}
		render() {
			if (this.state.loggedIn) return <PostsPage />;
			return <LoginPage />;
		}
	};

export default authenticate;
