import React, { Component } from 'react'
import { Carousel } from 'react-materialize'
import './partners.css'

class Partners extends Component {
    render() {
        return (
            <div className="partners_container">
                <Carousel className="partners_card" images={[
                    './assets/images_partners/zomo.jpg',
                    './assets/images_partners/adalya.jpg',
                    './assets/images_partners/afzal.jpg',
                    './assets/images_partners/social-smoke.jpg',
                    './assets/images_partners/smyrna.jpg',
                    './assets/images_partners/mazaya.jpg',
                    './assets/images_partners/nay.png',
                    './assets/images_partners/mizo.jpg',
                    './assets/images_partners/fumari.png',
                ]} />
            </div>
        );
    }
};


export default Partners;