import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './css/header.css';

class Header extends Component {
    render() {
        return (
            <div id='header'>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col id='header-logo' sm={6}>
                                    <img src={require('./../../assets/itb.png')}/>
                                    <h1>Institut Teknologi Bandung</h1>
                                </Col>
                                <Col sm={6}>
                                <a href="https://www.instagram.com/lkitb/" target="_blank"  title="Instagram"><img className="hf" width="27px" height="27px" src="https://kemahasiswaan.itb.ac.id/assets/img/icon/ig_icon.png"/></a>
                                <a href="https://www.facebook.com/lembagakemahasiswaanitb" target="_blank"  title="Facebook"><img className="hf" width="27px" height="27px" src="https://kemahasiswaan.itb.ac.id/assets/img/icon/fb_icon.png"/></a>
                                <a href="https://twitter.com/ItbLk" target="_blank"  title="Twitter"><img className="hf" width="27px" height="27px" src="https://kemahasiswaan.itb.ac.id/assets/img/icon/twit_icon.png"/></a>             
                                <a href="https://line.me/R/ti/p/%40lk-itb" target="_blank"  title="Line @"><img className="hf" width="27px" height="27px" src="https://kemahasiswaan.itb.ac.id/assets/img/icon/line_icon.png"/></a>
                                <a href="https://www.youtube.com/channel/UCwG1ovOa0G2u_zOzZNswZSw" target="_blank"  title="Youtube"><img className="hf" width="27px" height="27px" src="https://kemahasiswaan.itb.ac.id/assets/img/icon/youtube_icon.png"/></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Header;