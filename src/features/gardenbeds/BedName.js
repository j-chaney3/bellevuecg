import { Button } from 'reactstrap';


export const BedName = (props) => {

    console.log(props.fName , props.lName[0], props.available)
	if (props.available === 'Yes') {
		return (
			
				<>
                    Gardener:  
                </>
			
		)
	} if(props.available === 'No') {
        return (
            <>
                Gardener: {props.fName} {props.lName[0]}.
            </>
        )
    }
};
