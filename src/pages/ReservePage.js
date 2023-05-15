import { Container } from 'reactstrap';
//import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import DisplayBeds from '../features/gardenbeds/DisplayBeds';

const ReservePage = () => {
	return (
		<Container>
			<DisplayBeds />
		</Container>
	);
};

export default ReservePage;
