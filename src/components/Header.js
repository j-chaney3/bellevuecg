import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

import bfcgLogo from '../app/assets/img/bellevuecglogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
		<div>
			<img src={bfcgLogo} alt='Bellevue Friendship Community Garden' width='300px' />
		</div>
    )
}

export default Header