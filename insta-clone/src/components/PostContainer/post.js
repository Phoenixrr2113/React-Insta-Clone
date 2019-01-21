// import React from 'react';
// import {
// 	Card,
// 	CardHeader,
// 	CardMedia,
// 	CardTitle,
// 	CardText,
// } from 'material-ui/Card';

// import CommentSection from '../CommentSection/CommentSectionContainer';

// const Post = props => (
// 	<Card>
// 		<CardHeader
// 			titleStyle={{ paddingTop: '8px' }}
// 			title={props.posts.username}
// 			avatar={props.posts.thumbnailUrl}
// 		/>
// 		<CardMedia>
// 			<img src={props.posts.imageUrl} alt="" />
// 		</CardMedia>
// 		<div className="like-comment-btn">
// 			<i className="far fa-heart" />
// 			<i className="far fa-comment" />
// 		</div>

// 		<CardTitle
// 			subtitleColor="black"
// 			style={{ paddingTop: '5px' }}
// 			subtitle={`${props.posts.likes} likes`}
// 		/>
// 		<CardText style={{ paddingBottom: 0 }}>
// 			<CommentSection
// 				inputTerm={props.inputTerm}
// 				addComment={props.addComment}
// 				timeStamp={props.posts.timestamp}
// 				comments={props.posts.comments}
// 				handleChange={props.handleChange}
// 			/>
// 		</CardText>
// 	</Card>
// );

// export default Post;

import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: props.post.likes,
		};
	}
	incrementLike = () => {
		let likes = this.state.likes + 1;
		this.setState({ likes });
	};
	render() {
		return (
			<div className="post-border">
				<PostHeader
					username={this.props.post.username}
					thumbnailUrl={this.props.post.thumbnailUrl}
				/>
				<div className="post-image-wrapper">
					<img
						alt="post thumbnail"
						className="post-image"
						src={this.props.post.imageUrl}
					/>
				</div>
				<LikeSection
					incrementLike={this.incrementLike}
					likes={this.state.likes}
				/>
				<CommentSection
					postId={this.props.post.imageUrl}
					comments={this.props.post.comments}
				/>
			</div>
		);
	}
}

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string,
	}),
};

export default Post;
