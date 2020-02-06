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

const NavbarTing = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [loggedIn, setLogged] = useState(false);

  const logOut = () => {
    localStorage.removeItem('token');
    // window.location.reload();
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
        <NavbarBrand href='/' className='mr-auto'>
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to='/owner-dashboard/:id'>
                <NavLink>Profile</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/tech'>
                <NavLink>Dashboard</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/login'>
                <NavLink onClick={logOut} active>
                  Log Out
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
