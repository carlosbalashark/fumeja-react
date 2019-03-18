import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import Button from '../button/button'

import './nav.css'

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar className='nav' fixed right>
          <NavItem className='nav_item' href='#home'>Home</NavItem>
          <NavItem className='nav_item' href='#howItWorks'>Como que funciona?</NavItem>
          <NavItem className='nav_item' href='#plan'>Planos</NavItem>
          <NavItem className='nav_item' href='#contact'>Contato</NavItem>
          <NavItem href=''><Button name='Assine Já' ></Button></NavItem>
        </Navbar>
      </div>
    );
  }
};
export default Nav;