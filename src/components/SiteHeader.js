import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import bfcgBrand from '../app/assets/img/bfcgbrand.png';

const SiteHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Navbar light sticky="top" expand="md" className="navbar-expand-md">
			<NavbarBrand href="/" className="ms-5">
				<img
					src={bfcgBrand}
					alt="Bellevue Friendship Community Garden Logo"
					className="float-start"
				/>
				<h4 className="mt-4 ml-5" id="bfcg-title">
					Bellevue Friendship
					<br />
					<span className="ms-4">Community Garden</span>
				</h4>
			</NavbarBrand>

			<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
			<Collapse isOpen={menuOpen} navbar>
				<Nav className="ms-auto" navbar>
					<NavItem>
						<NavLink className="nav-link" to="/">
							<i className="fa fa-home fa-lg" /> Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/events">
							<i className="fa fa-calendar fa-lg" /> Events
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/reserve">
							<i className="fa fa-leaf fa-lg" /> Reserve a Bed
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/members">
							<i className="fa fa-user fa-lg" /> Members
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default SiteHeader;
