import React from 'react';

const Dropdown = () => {
	const data = [
		{ value: 1, name: 'Song 1' },
		{ value: 2, name: 'Song 2' },
		{ value: 3, name: 'Song 3' },
		{ value: 4, name: 'Song 4' }
	];

	return (
		<>
			<select className='songList'>
				{data.map((item, index) => (
					<option key={index} value={item.value}>
						{item.name}
					</option>
				))}
			</select>
		</>
	);
};

export default Dropdown;
