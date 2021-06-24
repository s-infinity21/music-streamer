import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
	return (
		<>
			<form
				className='bar'
				action=''
				style={{ margin: 'auto', maxWidth: '300px' }}>
				<input type='text' placeholder='Search..' name='search2' />
				<button type='submit'>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>
		</>
	);
};

export default Search;
