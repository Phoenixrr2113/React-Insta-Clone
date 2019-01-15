import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Post from './post';

const PostContainer = props => (
	<MuiThemeProvider>
		<div className="post-container">
			<Post posts={props.posts} />
		</div>
	</MuiThemeProvider>
);

export default PostContainer;
