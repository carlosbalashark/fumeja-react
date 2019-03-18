import React, { Component } from 'react';
import { Footer } from 'react-materialize'
import Line from '../../component/line/line'

import './footer.css'

class FooterF extends Component {
    render() {
        return (
            <div className="footer_center">
                <Line />
                <Footer className="footer_copyright" copyrights="Fumeja LTDA. CNPJ: 00.000.000/0000-00 - Endereço, Numero - Bairro - São Paulo/SP - CEP" links={
                    <ul>
                        <li><a className="footer_links" href="#!"><img className="footer_secure" src="assets/images_footer/compra-segura.png"></img></a></li>
                    </ul>
                }
                    className='footer_content'>
                    <ul>
                        <li><a className="footer_links" href="#!"><img className="footer_logo" src="assets/logo/logo.png"></img></a></li>
                    </ul>
                </Footer>
            </div>
        );
    }
}

export default FooterF;