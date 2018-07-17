/* global $ */

import React, { Component } from 'react';
import { Grid, Col, Row, PageHeader, Panel, Tabs, Tab } from 'react-bootstrap';
import DatabaseForm from './DatabaseForm';

class Database extends Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        $.ajax({
            type        : 'GET',
            url         : 'http://localhost:5000/api/Activity',
            success     : (result) => {
                console.log(result.data);
                this.createTable(result.data);
            },
            error       : function(result) {
                console.log(result);
            }
        });
    }

    createTable = data => {
        let placeholder = document.getElementById('admin-database__table');
        let table = document.createElement('table');
        let headers = ['lembaga_id', 'name'];
        let headerName = {
            'lembaga_id'    : 'Nama Lembaga',
            'name'          : 'Nama Kegiatan'
        }

        /* Helper function */
        let append = (parent, child, text) => {
            child.innerHTML = text;
            parent.appendChild(child);
        }
        let getHeaderName = key => { return headerName[key]; }

        /* Create table header */
        table.className = 'table table-striped table-bordered table-condensed table-hover';
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        for(var i=0; i<data.length; i++) {
            let th = document.createElement('th');
            append(tr, th, getHeaderName(headers[i]));
        }
        thead.appendChild(tr);
        table.appendChild(thead);

        /* Create table data */
        let tbody = document.createElement('tbody');
        for(var i=0; i<data.length; i++) {
            tr = document.createElement('tr');
            let td = document.createElement('td');
            append(tr, td, data[i]['lembaga_id']);
            td = document.createElement('td');
            append(tr, td, data[i]['name']);
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);

        /* Append to placeholder */
        placeholder.appendChild(table);
        $('table').DataTable({
            // 'scrollX'   : true
        });
    }

    render() {
        return (
            <Row>
                <Col lg={12}>
                    <PageHeader>
                        Database Kegiatan
                    </PageHeader>
                </Col>
                <Col lg={12}>
                    <Tabs defaultActiveKey={2}>
                        <Tab eventKey={1} title='Daftar Kegiatan'>
                            <Panel>
                                <Panel.Body>
                                    <div id='admin-database__table'/>
                                </Panel.Body>
                            </Panel>
                        </Tab>
                        <Tab eventKey={2} title='Tambah Kegiatan'>
                            <Panel>
                                <Panel.Body>
                                    <DatabaseForm/>
                                </Panel.Body>
                            </Panel>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        );
    }
}
export default Database;