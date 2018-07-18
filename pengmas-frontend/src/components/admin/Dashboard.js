import React, { Component } from 'react';
import { Col, Row, PageHeader } from 'react-bootstrap';

class Dashboard extends Component {
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <PageHeader>
                        Dashboard <small>Subheading</small>
                    </PageHeader>
                </Col>
            </Row>
        );
    }
}
export default Dashboard;