import { useSelector } from 'react-redux';
import {
	Container,
	Col,
	Row,
	Button,
	Card,
	CardImg,
	CardTitle,
	CardImgOverlay,
} from 'reactstrap';
import {
	selectAllGardenbeds,
	selectAvailableBeds,
} from '../slices/gardenbedsSlice';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const DisplayBeds = () => {
	//const availableBeds = useSelector(selectAvailableBeds);
	//const beds = useSelector(selectAllGardenbeds);
	const [showAvailable, setShowAvailable] = useState(false);
	const allBeds = useSelector(selectAllGardenbeds);
	const availableBeds = useSelector(selectAvailableBeds);
	const beds = showAvailable ? availableBeds : allBeds;

	//check for at least one bed
	if (beds.length > 0) {
		return (
			<Container>
				<Row>
					<Col sm="12" className="text-center">
						<h2>Garden beds</h2>
					</Col>
					<Col className="text-center pb-2">
						<Button onClick={() => setShowAvailable(false)}>
							Show All{' '}
						</Button>
						<Button onClick={() => setShowAvailable(true)}>
							Show Available
						</Button>
					</Col>
				</Row>
				<Row className="row-content ms-auto text-center">
					{beds.map((bed) => (
						<Col xs="12" md="6" className="mb-3" key={bed.id}>
							<Card>
								<CardTitle className="pb-2">
									Name: {bed.fName} {bed.lName[0]}.
								</CardTitle>
								<CardImg
									width="100%"
									src={bed.image}
									alt={`Garden bed ${bed.id}`}
								/>
								<CardImgOverlay>
									Bed Number: {bed.id}
								</CardImgOverlay>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		);
	} else {
		return <div>no beds to display.</div>;
	}
};
export default DisplayBeds;
