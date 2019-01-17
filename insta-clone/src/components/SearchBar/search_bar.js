import React from 'react';

const SearchBar = props => {
	return (
		<div className="search-bar">
			<input name="searchTerm" onChange={props.userSearch} />
		</div>
	);
};

export default SearchBar;
