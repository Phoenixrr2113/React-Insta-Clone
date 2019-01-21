// import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Post from './Post';

// const PostContainer = props => (
// 	<MuiThemeProvider>
// 		<div className="post-container">
// 			<Post
// 				inputTerm={props.inputTerm}
// 				addComment={props.addComment}
// 				handleChange={props.handleChange}
// 				posts={props.posts}
// 			/>
// 		</div>
// 	</MuiThemeProvider>
// );

// export default PostContainer;

import React from 'react';
import Post from './Post';

const PostsContainer = props => {
	return (
		<div className="posts-container-wrapper">
			{props.posts.map(p => (
				<Post key={p.imageUrl} post={p} />
			))}
		</div>
	);
};

export default PostsContainer;
