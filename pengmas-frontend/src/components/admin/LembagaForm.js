/* global $ */

import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class LembagaForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name    : '',
            lembaga : '',
            lat     : '',
            lng     : '',
            marker  : '',
        }
    }

    postNewActivity = () => {
        this.setState({
            name    : $('input[name=name]').val(),
            lembaga : $('#database__form-select :selected').text()
        });

        let data = {
            "name"              : $('input[name=name]').val(),
            "category"          : $('#lembaga__form-select :selected').text(),
            "id_line"           : $('input[name=line]').val(),
            "instagram"         : $('input[name=insta]').val(),
            "web"               : $('input[name=web]').val(),
            "youtube"           : $('input[name=youtube]').val(),
            "penanggung_jawab"  : $('input[name=pj]').val(),
            "nomor_hp"          : $('input[name=hppj]').val(),
            "email"             : $('input[name=email]').val(),
        }

        $.ajax({
            type        : 'POST',
            url         : 'http://localhost:5000/api/Lembaga',
            data        : JSON.stringify(data),
            contentType : 'application/json; charset=utf-8',
            success     : function(result) {
                console.log(result);
            },
            error       : function(result) {
                console.log(result);
            }
        });
    }

    render() {
        var mapStyle = {
            height  : '400px',
            width   : '100%'
        }

        var btnStyle = {
            float   : 'right'
        }

        return (
            <form>
                <FormGroup>
                    <ControlLabel>Nama Lembaga</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan nama lembaga' name='name'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Kategori</ControlLabel>
                    <FormControl componentClass='select' id='lembaga__form-select'>
                        <option value='1'>Unit</option>
                        <option value='2'>Himpunan</option>
                        <option value='3'>Lainnya</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type='email' placeholder='Masukkan email lembaga' name='email'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Nama Penanggung Jawab</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan nama penanggung jawab' name='pj'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>No.HP Penanggung Jawab</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan no.HP penanggung jawab' name='hppj'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>ID Line</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan ID Line lembaga' name='line'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Instagram</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan akun Instagram lembaga' name='insta'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Website</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan alamat web lembaga' name='web'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Youtube</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan akun Youtube lembaga' name='youtube'/>
                </FormGroup>
                <Button onClick={this.postNewActivity} bsStyle='success' style={btnStyle}>Tambah Lembaga</Button>
            </form>
        );
    }
}

export default LembagaForm;