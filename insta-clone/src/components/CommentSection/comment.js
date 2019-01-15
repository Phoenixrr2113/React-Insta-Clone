import React from 'react';

const Comment = props => {
	// const styles = {
	// 	chip: {
	// 		margin: 4,
	// 	},
	// 	wrapper: {
	// 		display: 'flex',
	// 		flexWrap: 'wrap',
	// 	},
	// };

	return (
		<div className="comment">
			<div>{props.commentUser}</div>
			<div>{props.commentText}</div>
			{/* <Chip
			onClick={handleClick}
			style={styles.chip}
			>
			<Avatar src="images/uxceo-128.jpg" />
			
			{props.commentText}
			</Chip> */}
		</div>
	);
};

export default Comment;
