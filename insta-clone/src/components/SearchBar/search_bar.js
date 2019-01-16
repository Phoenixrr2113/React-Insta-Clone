import React from 'react';

const SearchBar = props => {
	return (
		<div className="search-bar">
			<form onSubmit={props.userSearch}>
				<input value={props.inputTerm} onChange={props.handleChange} />
			</form>
		</div>
	);
};

export default SearchBar;
