import { useSelector } from "react-redux";
import {Container, Col, Row} from 'reactstrap';
import { sellectAllGardenbeds} from "../slices/gardenbedsSlice";

import { Link } from "react-router-dom";



const DisplayBeds = () => {
    
    const beds = useSelector(sellectAllGardenbeds);

    //const beds = gardenbedsReducer; can't map a reducer
    if (beds) {
        return (
        
        <Container>
                <Row className="row-content ms-auto text-center">
                    <h2>Garden Beds</h2>
                    {beds.map((bed) => (
                        
                        
                        <Col
                            sm='12'
                            md='6'
                            className="mb-3 d-flex"
                            key={bed.id}
                            >   <Link to=''>
                                <img src={bed.image}  alt={`Bed + ${bed.id}`} className="float-start img-fluid garden-beds"/>
                                </Link>
                                {console.log(bed.image)}
                                <Col className="text-start" sm='12' md='5'>
        
                                    <p className="bed-info">
                                        Bed Number: {bed.id} <br />
                                        Name: {bed.fName} {bed.lName[0]}. <br/>
                                        Type: {bed.size} <br/>
                                        Available: {bed.available} 
                                    </p>

                                </Col>                       
                        </Col>                  
                        
                    ))}
                </Row>
            </Container>
        )
    } else {
        return (
            <div>
                no beds to display.
            </div>
        )
    }
  

}
export default DisplayBeds;