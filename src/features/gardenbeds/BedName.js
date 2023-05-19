import { Button } from 'reactstrap';


export const BedName = (props) => {

    console.log(props.fName , props.lName[0], props.available)
	if (props.available === 'Yes') {
		return (
			
				<>
                    Name: Unoccupied 
                </>
			
		)
	} if(props.available === 'No') {
        return (
            <>
                Name: {props.fName} {props.lName[0]}
            </>
        )
    }
};
