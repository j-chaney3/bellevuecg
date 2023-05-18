import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const ReserveButton = (props) => {


	if (props.available === 'Yes') {
		return (
			
				<Button color="success" size="sm">
					Reserve this bed
				</Button>
			
		);
	}
};
