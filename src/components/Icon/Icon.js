import React from 'react';

const Icon = props => {
	const iconStyle = {
		color: props.color == 'orange' ? 'orange' : '',
	};
	return <i style={iconStyle} className={props.name}></i>;
};

export default Icon;
