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
	CardText,
} from 'reactstrap';
import {
	selectAllGardenbeds,
	selectAvailableBeds,
} from '../slices/gardenbedsSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReserveButton } from '../../components/ReserveButton';

const DisplayBeds = () => {
	const [showAvailable, setShowAvailable] = useState(false);
	const allBeds = useSelector(selectAllGardenbeds);
	const availableBeds = useSelector(selectAvailableBeds);
	const beds = showAvailable ? availableBeds : allBeds;

	//check for at least one bed
	if (beds && beds.length > 0) {
		return (
			<Container>
				<Row>
					<Col sm="12" className="text-center">
						<h2>Garden beds</h2>
					</Col>
					<Col className="text-center pb-2">
						<Button
							color="primary"
							onClick={() => setShowAvailable(false)}
						>
							Show All
						</Button>
						{' | '}
						<Button
							color="success"
							onClick={() => setShowAvailable(true)}
						>
							Show Available
						</Button>
					</Col>
				</Row>

				<Row className="row-content ms-auto">
					{beds.map((bed) => (
						<Col xs="12" md="6" className="mb-3" key={bed.id}>
							<Card>
								<CardTitle className="pb-2">
									<ul>
										Name: {bed.fName} {bed.lName[0]}. <br />
										Bed: {bed.id} <br />
									</ul>
									<ReserveButton available={bed.available} onClick={''}  />
								</CardTitle>

								<CardImg top
									width="100%"
									src={bed.image}
									alt={`Garden bed ${bed.id}`}
								/>
								<CardImgOverlay></CardImgOverlay>
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
