import React from 'react';
import {
	Card,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText,
	// IconButton,
} from 'material-ui/Card';

import CommentSection from '../CommentSection/comment_section';

const Post = props => (
	<Card>
		<CardHeader
			titleStyle={{ paddingTop: '8px' }}
			title={props.posts.username}
			avatar={props.posts.thumbnailUrl}
		/>
		<CardMedia>
			<img src={props.posts.imageUrl} alt="" />
		</CardMedia>
		<CardTitle subtitle={props.posts.likes} />
		<CardText style={{ paddingBottom: 0 }}>
			<CommentSection
				inputTerm={props.inputTerm}
				addComment={props.addComment}
				timeStamp={props.posts.timestamp}
				comments={props.posts.comments}
				handleChange={props.handleChange}
			/>
		</CardText>
	</Card>
);

export default Post;
