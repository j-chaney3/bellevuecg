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
//import { Link } from 'react-router-dom';
import { ReserveButton } from './ReserveButton';
import { BedName } from './BedName';
import WaitingListForm from '../../components/WaitingListForm';

const DisplayBeds = () => {
	const [showAvailable, setShowAvailable] = useState(false);
	const allBeds = useSelector(selectAllGardenbeds);
	const availableBeds = useSelector(selectAvailableBeds);
	const beds = showAvailable ? availableBeds : allBeds;

	//check for at least one bed
	if (beds && beds.length > 0) {
		return (
			<Container>
				<Row className="row-content mb-3">
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

				<Row className="row-content ">
					{beds.map((bed) => (
						<Col xs="12" md="6" className="mb-3" key={bed.id}>
							<Card>
								<CardTitle className="mb-0 text-center">
									Bed: {bed.id} - Currently Available:{' '}
									{bed.available}
								</CardTitle>
								<CardImg
									width="100%"
									src={bed.image}
									alt={`Garden bed ${bed.id}`}
								/>

								<CardText className="text-center">
									<BedName
										fName={bed.fName}
										lName={bed.lName}
										available={bed.available}
									/>
								</CardText>
								<CardImgOverlay className="mt-3">
									<ReserveButton
										available={bed.available}
										id={bed.id}
									/>
								</CardImgOverlay>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		);
	} else {
		return (
			<Container>
				<Row className="row-content">
					<Col sm="12" className="text-center">
						<h2>Sorry, there are no available beds right now</h2>
					</Col>
					<Col sm="12" className="text-center">
						<p>
							If you'd like to join a waiting list to be notified
							when a bed becomes available, please fill out the
							form below.
						</p>
					</Col>
				</Row>
				<Row className="row-content mt-3">
					<Col>
						<WaitingListForm />
					</Col>
				</Row>
			</Container>
		);
	}
};
export default DisplayBeds;
