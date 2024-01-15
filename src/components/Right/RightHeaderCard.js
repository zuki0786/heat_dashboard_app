import React from 'react';

const RightHeaderCard = props => {
	return (
		<div className='rightHeader px-2 d-flex align-items-center'>
			<h6 className='m-0 text-white'>{props.text}</h6>
		</div>
	);
};

export default RightHeaderCard;
