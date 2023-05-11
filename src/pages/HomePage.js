import { Container, Col, Row,  } from 'reactstrap';
//import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    
	return (
		<Container>
        
			<Row className='row-content'>
				<Col lg='4' className='ms-auto'>One col</Col>
				<Col lg='4'>two Col</Col>
				<Col lg='4'>what is wrong with these</Col>
			</Row>
		
		</Container>
	);
};

export default HomePage;
