import React from 'react';
import Details from './Details';
import Play from './Play';
import Dropdown from './Dropdown';
//import Search from './Search';

function App() {
	return (
		<>
			<Dropdown />
			<div className='App'>
				<div className='m-play'>
					<audio></audio>
					<h4>Playing Now</h4>
					<Details />
					<Play />
					<p>
						<strong>Next Up: Next Song</strong>
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
