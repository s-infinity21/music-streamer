import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faPause,
	faForward,
	faBackward
} from '@fortawesome/free-solid-svg-icons';

const Play = () => {
	var [status, changeStatus] = useState(true);
	var ic;
	if (status === true) {
		ic = <FontAwesomeIcon icon={faPlay} />;
	} else {
		ic = <FontAwesomeIcon icon={faPause} />;
	}

	return (
		<>
			<div className='m-controls'>
				<button className='skip-btn'>
					<FontAwesomeIcon icon={faBackward} />
				</button>
				<button className='play-btn' onClick={() => changeStatus(!status)}>
					{ic}
				</button>
				<button className='skip-btn'>
					<FontAwesomeIcon icon={faForward} />
				</button>
			</div>
		</>
	);
};

export default Play;
