import React, { Component } from 'react';
import Nav from '../../component/nav/nav'
import SlideHeader from '../../component/slide/slide'
import Partners from '../../component/partners/partners'
class Header extends Component {
    render() {
      return (
        <div>
            <Nav />
            <SlideHeader />
            <Partners />
        </div>
      );
    }
  }
  
  export default Header;
  