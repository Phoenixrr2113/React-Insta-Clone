import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Post from './post';

const PostContainer = props => (
	<MuiThemeProvider>
		<div className="post-container">
			<Post
				inputTerm={props.inputTerm}
				addComment={props.addComment}
				handleChange={props.handleChange}
				posts={props.posts}
			/>
		</div>
	</MuiThemeProvider>
);

export default PostContainer;
