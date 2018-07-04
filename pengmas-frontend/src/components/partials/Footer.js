import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const Style = {
            marginTop: '0px',
            padding: '10px',
            backgroundColor: '#3d4148',
            color: '#e1e1e1',
            textAlign: 'center'
        };

        return (
            <div id='footer' style={Style}>
                <p>© Lembaga Kemahasiswaan Institut Teknologi Bandung</p>
            </div>
        );
    }
}

export default Footer;