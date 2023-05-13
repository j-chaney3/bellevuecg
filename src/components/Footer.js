import { useState } from 'react';
import {Row, Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
    
    return (
		<footer className="site-footer fixed-bottom">
			<Container>
				<Row>
					<Col className='text-left'>
						<i className='fa fa-phone'> </i> 724-412-1234 &nbsp;
						<i className='fa fa-envelope'></i>&nbsp; ouremail@oursite.com 
					</Col>
				</Row>
			</Container>
		</footer>
    )
}

export default Footer;