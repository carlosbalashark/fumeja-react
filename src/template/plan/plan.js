import React, { Component } from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize'
import Button from '../../component/button/button'
import Line from '../../component/line/line'
import '../../utils/function'
import './plan.css'

class plan extends Component {
    render() {
        return (
            <div className='plan_centro'>
                <Line />
                <div className="plan_conteudo">
                    <h3 className="plan_title">Escolha seu plano e assine já!</h3>
                    <Row >
                        <Col m={3} s={3}>
                            <div className="plan_item">
                                <Card header={<CardTitle reveal image={"assets/images_plan/pack1.jpg"} waves='light' />}
                                    title={
                                        <div>
                                            <h4 className="plan_name">Nome do Plano</h4>
                                        </div>}
                                    reveal={<div className="plan_description">
                                        <p>
                                            Descrição da Essencia<br />
                                            <br /> <b>+</b><br /><br />Descrição do Carvão<br />
                                            <br /><b>+</b><br /><br />Descrição do Papel Aluminio<br />
                                        </p>
                                    </div>}>
                                    <p className="plan_type">Tipo de Plano</p>
                                    <div className="plan_price">
                                        <p className="plan_priceOnly">Apenas</p>
                                        <p className="plan_value"><strong className="price_real">R$</strong> 50, <small>00</small></p>
                                    </div>
                                    <Button name="Assine"></Button>
                                </Card>
                            </div>
                        </Col>
                        <Col m={3} s={3}>
                            <div className="plan_item">
                                <Card header={<CardTitle reveal image={"assets/images_plan/pack1.jpg"} waves='light' />}
                                    title={
                                        <div>
                                            <h4 className="plan_name">Nome do Plano</h4>
                                        </div>}
                                    reveal={<div className="plan_description">
                                        <p>
                                            Descrição da Essencia<br />
                                            <br /> <b>+</b><br /><br />Descrição do Carvão<br />
                                            <br /><b>+</b><br /><br />Descrição do Papel Aluminio<br />
                                        </p>
                                    </div>}>
                                    <p className="plan_type">Tipo de Plano</p>
                                    <div className="plan_price">
                                        <p className="plan_priceOnly">Apenas</p>
                                        <p className="plan_value"><strong className="price_real">R$</strong> 100, <small>00</small></p>
                                    </div>
                                    <Button name="Assine"></Button>
                                </Card>
                            </div>
                        </Col>
                        <Col m={3} s={3}>
                            <div className="plan_item">
                                <Card header={<CardTitle reveal image={"assets/images_plan/pack1.jpg"} waves='light' />}
                                    title={
                                        <div>
                                            <h4 className="plan_name">Nome do Plano</h4>
                                        </div>}
                                    reveal={<div className="plan_description">
                                        <p>
                                            Descrição da Essencia<br />
                                            <br /> <b>+</b><br /><br />Descrição do Carvão<br />
                                            <br /><b>+</b><br /><br />Descrição do Papel Aluminio<br />
                                        </p>
                                    </div>}>
                                    <p className="plan_type">Tipo de Plano</p>
                                    <div className="plan_price">
                                        <p className="plan_priceOnly">Apenas</p>
                                        <p className="plan_value"><strong className="price_real">R$</strong> 00, <small>00</small></p>
                                    </div>
                                    <Button name="Assine"></Button>
                                </Card>
                            </div>
                        </Col>
                        <Col m={3} s={3}>
                            <div className="plan_item">
                                <Card header={<CardTitle reveal image={"assets/images_plan/pack1.jpg"} waves='light' />}
                                    title={
                                        <div>
                                            <h4 className="plan_name">Nome do Plano</h4>
                                        </div>}
                                    reveal={<div className="plan_description">
                                        <p>
                                            Descrição da Essencia<br />
                                            <br /> <b>+</b><br /><br />Descrição do Carvão<br />
                                            <br /><b>+</b><br /><br />Descrição do Papel Aluminio<br />
                                        </p>
                                    </div>}>
                                    <p className="plan_type">Tipo de Plano</p>
                                    <div className="plan_price">
                                        <p className="plan_priceOnly">Apenas</p>
                                        <p className="plan_value"><strong className="price_real">R$</strong> 00, <small>00</small></p>
                                    </div>
                                    <Button name="Assine"></Button>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default plan;