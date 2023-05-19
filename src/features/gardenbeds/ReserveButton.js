import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useState } from 'react';

export const ReserveButton = (props) => {
	const [reserveModalOpen, setReserveModalOpen] = useState(false);

	if (props.available === 'Yes') {
		return (
			<>
				<Button
					color="primary"
					size="sm"
					onClick={() => setReserveModalOpen(true)}
				>
					Reserve this bed
				</Button>

				<Modal isOpen={reserveModalOpen}>
					<ModalHeader className='primary' toggle={() => setReserveModalOpen(false)}>
						Reserve - Bed {props.id}
					</ModalHeader>
					<ModalBody>
						<Button
							color="success"
							onClick={() => {
								setReserveModalOpen(false);
							}}
						>
							Pay
						</Button>
					</ModalBody>
				</Modal>
			</>
		);
	}
};
