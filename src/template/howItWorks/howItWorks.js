import React, { Component } from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize'
import Line from '../../component/line/line'

import './howItWorks.css'

class howItWorks extends Component {
    render() {
        return (

            <div className='howItWorks_centro'>
                <Line />
                <div className="howItWorks_conteudo">
                    <h3 className="howItWorks_title">Como que funciona?</h3>
                    <Row >
                        <Col s={3} className='howItWorks_item'>
                            <Card className="howItWorks_card" header={<CardTitle image='assets/images_howItWorks/passo1.png'></CardTitle>}>
                                <h5 className="howItWorks_cardTitle">Passo 1</h5>
                                <p className="howItWorks_cardSubTitle">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </Card>
                        </Col>

                        <Col s={3} className='howItWorks_item'>
                            <Card className="howItWorks_card" header={<CardTitle image='assets/images_howItWorks/passo1.png'></CardTitle>}>
                                <h5 className="howItWorks_cardTitle">Passo 2</h5>
                                <p className="howItWorks_cardSubTitle">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </Card>
                        </Col>

                        <Col s={3} className='howItWorks_item'>
                            <Card className="howItWorks_card" header={<CardTitle image='assets/images_howItWorks/passo1.png'></CardTitle>}>
                                <h5 className="howItWorks_cardTitle">Passo 3</h5>
                                <p className="howItWorks_cardSubTitle">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </Card>
                        </Col>

                        <Col s={3} className='howItWorks_item'>
                            <Card className="howItWorks_card" header={<CardTitle image='assets/images_howItWorks/passo1.png'></CardTitle>}>
                                <h5 className="howItWorks_cardTitle">Passo 4</h5>
                                <p className="howItWorks_cardSubTitle">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default howItWorks;
