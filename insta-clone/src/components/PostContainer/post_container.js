import React from 'react';

import Post from './post';

const PostContainer = props => {
	return (
		<div>
			<Post posts={props.posts} />
		</div>
	);
};

export default PostContainer;
