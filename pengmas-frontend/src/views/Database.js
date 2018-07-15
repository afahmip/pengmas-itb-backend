/* global $ */

import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

class Database extends Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getLembagaData = () => {
        
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
        let placeholder = document.getElementById('database-table');
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
        let tableDivStyle = {
            margin  : '40px 0 50px 0'
        }

        return (
            <Grid>
                <h2 className='main-title'>Database Kegiatan</h2>
                <div>
                    <p>Berikut ini adalah daftar kegiatan pengabdian masyarakat yang pernah diselenggarakan oleh lembaga-lembaga mahasiswa di ITB. </p>
                </div>
                <div id='database-table' style={tableDivStyle}>
                    
                </div>
            </Grid>
        );
    }
}

export default Database;