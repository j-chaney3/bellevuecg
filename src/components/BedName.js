import { Button } from 'reactstrap';


export const BedName = (props) => {

    console.log(props.fName , props.lName[0], props.available)
	if (props.available === 'Yes') {
		return (
			
				<div>
                    Name: 
                </div>
			
		)
	} if(props.available === 'No') {
        return (
            <div>
                
                Name: {props.fName} {props.lName[0]}
            </div>
        )
    }
};
