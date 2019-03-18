import React, { Component } from 'react';
import { Row, Input, Icon, Col } from 'react-materialize'
import Button from '../../component/button/button'
import Line from '../../component/line/line'

import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact_center">
                <Line />
                <div className="contact_content">
                    <h3 className="contact_title">Entrar em contato</h3>
                    <Row>
                        <Input s={4} label="Nome" validate><Icon>account_circle</Icon></Input>
                        <Input s={4} label="Telefone" validate type='tel'><Icon>phone</Icon></Input>
                        <Input s={4} label="Email" validate type='email'><Icon>email</Icon></Input>
                    </Row>
                    <Row>
                        <Button name="Enviar"></Button>
                    </Row>
                    <p className="contact_subTitle">
                        Entre em contato com a gente também por aqui:
                    </p>
                    <Row>
                        <Col s={3}><a href="#" target="_BLANK"><img className="contact_img" src="assets/images_contact/face.svg"></img></a></Col>
                        <Col s={3}><a href="#" target="_BLANK"><img className="contact_img" src="assets/images_contact/insta.svg"></img></a></Col>
                        <Col s={3}><a href="#" target="_BLANK"><img className="contact_img" src="assets/images_contact/twitter.svg"></img></a></Col>
                        <Col s={3}><a href="#" target="_BLANK"><img className="contact_img" src="assets/images_contact/whats.svg"></img></a></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Contact;