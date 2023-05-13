import { Container, Col, Row } from 'reactstrap';
//import DisplayList from '../features/display/DisplayList';

import bfcgFull from '../app/assets/img/bellevuecglogo.png';
import { Link } from 'react-router-dom';
import ahnLogo from '../app/assets/img/partners/ahn-logo-reverse.svg';
import bfbvLogo from '../app/assets/img/partners/bonafidebellevue.jpg'
import gpghLogo from '../app/assets/img/partners/Grow-Pittsburgh-Logo.png'

const HomePage = () => {
	return (
		<Container>
			<Row className="row-content">
				<Col md="6" sm="4" className="ms-auto">
					<img
						src={bfcgFull}
						alt="Bellevue Friendsihp Community Garden"
						width="50%"
					/>
				</Col>
				<Col md="6" sm="8">
					<p>
						<Link to="/reserve" className="link-success">
							Come grow with us!
						</Link>{' '}
						We have developed a new community garden in the vacant
						lot located at 616 Cliff Avenue thanks to the generosity
						of Allegheny Health Network and Highmark Health who are
						leasing the land to us.
					</p>
					<p>
						The Bellevue Friendship Garden offers a space for area
						residents to grow their own vegetables, herbs and
						flowers in an inclusive and welcoming environment that
						celebrates diversity and facilitates engagement
						regardless of culture, class, ethnicity, gender, age, or
						ability. We've partnered with Grow Pittsburgh, who are
						providing technical assistance and materials through
						their New Garden program to help us create and maintain
						a thriving community garden.
					</p>
				</Col>
			</Row>
			<br />
			<Row className="row-content">
				<Col sm='12' className='text-center'><h1>Our Partners</h1></Col>
				<Col sm='12' md='4' className='text-center'>
					<a href='https://www.ahn.org/' target='_blank'>
						<img src={ahnLogo} alt='Allegheny Health Netowrk' width='75%' className='float-start'/>
					</a>
				</Col>
				<Col sm='12' md='4' className='text-center'>
					<a href='https://www.bonafidebellevue.org/' target='_blank'>
						<img src={bfbvLogo} alt='Bonafide Bellevue' width='75%' className='float-start'/>
					</a>	
				</Col>
				<Col sm='12' md='4' className='text-center'>
					<a href='https://www.growpittsburgh.org/' target='_blank'>
						<img src={gpghLogo} alt='Grow Pittsburgh' width='75%' className='float-start'/>
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;