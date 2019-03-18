import React, { Component } from 'react'
import { Slide, Slider } from 'react-materialize'
import './slide.css'

class SlideHeader extends Component {
    render() {
        return (
            <div>
                <Slider className="slide" >
                    <Slide         
                        src="./assets/images_slider/slider1.jpg"
                        title="Title">
                        SubTitle
                    </Slide>
                    <Slide
                        src="./assets/images_slider/slider2.jpg"
                        title="Title"
                        placement="left">
                        SubTitle
                    </Slide>
                    <Slide
                        src="./assets/images_slider/slider3.jpg"
                        title="Title"
                        placement="right">
                        SubTitle
                </Slide>
                </Slider>
            </div>

        );
    }
};


export default SlideHeader;