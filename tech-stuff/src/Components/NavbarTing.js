import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../app.css';

const NavbarTing = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [loggedIn, setLogged] = useState(false);

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('reload');
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div>
      <Navbar color='faded' light>
        <NavbarBrand className='mr-auto'>Tech-Hub</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to='/owner-dashboard/:id'>
                <NavLink>Profile</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/all/tech'>
                <NavLink>Dashboard</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/login'>
                <NavLink onClick={logOut} active>
                  Login/Logout
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarTing;
