import { Container } from 'reactstrap';
import DisplayBeds from '../features/gardenbeds/DisplayBeds';

const Checkout = (props) => {
	return (
		<Container>
			<DisplayBeds bed={props.id}/>
			
		</Container>
	);
};

export default Checkout;
