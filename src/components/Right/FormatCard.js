import React from 'react';

const FormatCard = props => {
	return (
		<div className='d-flex justify-content-between mt-1'>
			<div>
				<span className='formatText'>{props.text}</span>
			</div>
			{props.type == 'color' ? (
				<div>
					<input className='formatInput' type='color' />
				</div>
			) : (
				<div>
					<span>20</span>
				</div>
			)}
		</div>
	);
};

export default FormatCard;
