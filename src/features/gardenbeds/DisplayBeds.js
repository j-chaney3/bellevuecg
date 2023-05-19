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
import { BedName } from '../../components/BedName';

const DisplayBeds = (props) => {
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
								<CardImg top
									width="100%"
									src={bed.image}
									alt={`Garden bed ${bed.id}`}
								/>
								
								<CardTitle className="pb-2">
									<ul>
										
										<BedName fName ={bed.fName} lName={bed.lName} available={bed.available}/>
										Bed: {bed.id} - Currently Available: {bed.available}
									</ul>
								</CardTitle>
								<CardImgOverlay>
									<Link to={`Checkout/${bed.id}`}>
											<ReserveButton available={bed.available}/>
									</Link>
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
