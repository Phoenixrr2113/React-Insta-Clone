import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Post from './post';

const PostContainer = props => (
	<MuiThemeProvider>
		<Post posts={props.posts} />
	</MuiThemeProvider>
);

export default PostContainer;
