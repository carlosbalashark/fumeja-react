import React, { Component } from 'react';
import Header from '../template/header/header'
import HowItWorks from '../template/howItWorks/howItWorks'
import Plan from '../template/plan/plan'
import Contact from '../template/contact/contact'
import FooterF from '../template/footer/footer'


class App extends Component {
  render() {
    return (
      <div>
        <section id="home">
          <Header />
        </section>
        <section id="howItWorks">
          <HowItWorks />
        </section>
        <section id="plan">
          <Plan />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <FooterF />
      </div>
    );
  }
}

export default App;
