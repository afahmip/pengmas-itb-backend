import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class Kkn extends Component {
    render() {
        var containerStyle = {
            marginBottom: '50px'
        }

        var contentStyle = {
            textAlign: 'justify',
            color: '#2d2d2d',
            margin: '30px 0'
        }

        return (
            <Grid style={containerStyle}>
                <h2>KKN Tematik</h2>
                <div style={contentStyle}>
                    <p>KKN Tematik ITB merupakan kegiatan yang berlandaskan Tri Dharma Perguruan Tinggi. KKN Tematik ITB merupakan suatu proses satu kesatuan yang dihasilkan dari kegiatan pendidikan dan penelitian. Ilmu yang diperoleh melalui pembelajaran dan penelitian di kampus, diimplementasikan untuk menjadi suatu solusi atas permasalahan yang ada di masyarakat. Sehingga nilai kebermanfaatan sebagai kaum intelektual dapat langsung dirasakan oleh masyarakat.</p>
                    <p>Kegiatan KKN Tematik ITB sebenarnya telah ada sejak tahun 1980-an. Namun kegiatan ini sempat terhenti tanpa sebab yang tidak diketahui. Akhirnya di bawah bimbingan Lembaga Kemahasiswaan ITB pada tahun 2011, kegiatan KKN Tematik ITB kembali dilaksanakan menjadi salah satu mata kuliah unggulan. Melalui konsep yang terus berubah tiap tahunnya serta dengan program yang bermacam-macam ini, diharapkan mahasiswa ITB mampu mengembangkan potensinya dan menjadi problem solver di masyarakat.</p>
                </div>
            </Grid>
        );
    }
}

export default Kkn;