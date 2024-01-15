import React from 'react';
import { Container } from 'reactstrap';
import Icon from '../Icon/Icon';

const TopHeader = () => {
	return (
		<div className='header d-flex align-items-center'>
			<Container fluid>
				<div className='d-flex justify-content-between'>
					<div></div>
					<div className='d-flex'>
						<h6 className='m-0 text-white'>Annotation Editor</h6>{' '}
						<span className='text-white headerSmallText mt-2 ms-1'>
							V.0.0.1
						</span>
					</div>
					<div>
						<i
							style={{ color: 'white' }}
							className='far fa-user-circle pe-1'
						></i>
						<span className='headerText text-white'>ADMIN</span>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default TopHeader;
