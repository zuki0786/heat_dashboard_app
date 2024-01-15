import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopHeader from '../components/Header/TopHeader';
import FormatShape from '../components/Right/FormatShape';
import RightHeaderCard from '../components/Right/RightHeaderCard';
import Icon from '../components/Icon/Icon';
const view = () => {
	return (
		<div className='mainOuter'>
			<TopHeader />
			<Container fluid className='mt-2'>
				<Row>
					<Col md='9'>
						<div className='leftCol'>
							<div className='leftHeader px-2 d-flex align-items-center'>
								<h6 className='m-0 text-white'>Heater Name</h6>
							</div>

							<div className='px-2 d-flex justify-content-end mt-2'>
								<div className='px-3'>
									<Icon name='fas fa-temperature-high' />
								</div>
								<div className='px-3'>creamic view</div>
								<div className='px-3'>
									<Icon
										name='fas fa-temperature-low'
										color='orange'
									/>
								</div>
							</div>
						</div>
					</Col>
					<Col md='3' className='rightcol'>
						<div className='topSection'>
							<RightHeaderCard text='Toolbox' />
							<div className='d-flex px-2 mt-2'>
								<div>
									<Icon name='far fa-square' />
								</div>
								<div className='ps-3'>
									<Icon name='fas fa-text-height' />
								</div>
							</div>
						</div>
						<FormatShape />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default view;
