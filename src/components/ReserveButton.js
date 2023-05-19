import { Button } from 'reactstrap';


export const ReserveButton = (props) => {


	if (props.available === 'Yes') {
		return (
			
				<Button color="success" size="sm">
					Reserve this bed
				</Button>
			
		);
	}
};
