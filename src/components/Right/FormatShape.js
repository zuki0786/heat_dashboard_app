import React from 'react';
import { Row, Col } from 'reactstrap';
import FormatCard from './FormatCard';
import RightHeaderCard from './RightHeaderCard';
import Icon from '../Icon/Icon';

const FormatShape = () => {
	return (
		<div className='topSection mt-4'>
			<RightHeaderCard text='Format Shape' />
			<div className=' px-2 mt-2'>
				<Row className='align-items-center'>
					<Col md='6'>
						<FormatCard text='Fill' type='color' />
						<FormatCard text='Stroke' type='color' />
						<FormatCard text='Size' type='size' />
					</Col>
					<Col md='5'>
						<Icon name='fas fa-bars' /> <span>1</span>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default FormatShape;
