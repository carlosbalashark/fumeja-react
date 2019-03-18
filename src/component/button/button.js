import React, { Component } from 'react'
import  { Button } from 'react-materialize'
import './button.css'

class Btn extends Component {
    render() {
        return (
            <div>
                <Button className='button_sigIt'>{this.props.name}</Button>
            </div>
        );
    }
};
export default Btn;