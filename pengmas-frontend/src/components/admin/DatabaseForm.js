/* global google */
/* global $ */

import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class DatabaseForm extends Component {
    constructor(props) {
        super(props);

        this.initMap = this.initMap.bind(this);
        this.state = {
            name    : '',
            lembaga : '',
            lat     : '',
            lng     : '',
            marker  : '',
        }
    }

    componentDidMount() {
        this.initMap();
    }

    initMap = () => {
        var indonesia = {lat: -1.8409802, lng: 119.93084848};
        var map = new google.maps.Map(document.getElementById('admin-map'), {
            zoom: 5,
            center: indonesia,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8ec3b9"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1a3646"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4b6878"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#64779e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4b6878"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#334e87"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#023e58"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#283d6a"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#6f9ba5"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#023e58"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3C7680"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#304a7d"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#98a5be"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2c6675"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#255763"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b0d5ce"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#023e58"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#98a5be"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#283d6a"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3a4762"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#0e1626"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#4e6d70"
                        }
                    ]
                }
            ]
        });

        // This event listener calls addMarker() when the map is clicked.
        google.maps.event.addListener(map, 'click', event => {
            this.addMarker(event.latLng, map);
        });
    }

    addMarker = (location, map) => {
        let marker = new google.maps.Marker({
            position: location,
            animation: google.maps.Animation.BOUNCE,
            map: map
        });
        let position = this.splitLocation(location);

        if(this.state.marker) {
            this.state.marker.setMap(null);
        }

        this.setState({
            lat     : position.lat,
            lng     : position.lng,
            marker  : marker
        });
    }

    splitLocation = location => {
        let lokasi = location.toString().substr(1).slice(0, -1).split(' ');
        return {
            lat: parseFloat(lokasi[0].slice(0, -1)),
            lng: parseFloat(lokasi[1])
        };
    }

    postNewActivity = () => {
        this.setState({
            name    : $('input[name=name]').val(),
            lembaga : $('#database__form-select :selected').text()
        });

        let data = {
            "lat"       : this.state.lat,
            "lng"       : this.state.lng,
            "name"      : $('input[name=name]').val(),
            "lembaga_id": $('#database__form-select :selected').text()
        }

        $.ajax({
            type        : 'POST',
            url         : 'http://localhost:5000/api/Activity',
            data        : JSON.stringify(data),
            contentType : 'application/json; charset=utf-8',
            success     : function(result) {
                console.log(result);
            },
            error       : function(result) {
                console.log(result);
            }
        });
        //alert(JSON.stringify(data));

        // let formData = {
        //     'first_name'    : $('input[name=first_name]').val(),
        //     'last_name'     : $('input[name=last_name]').val(),
        //     'email'         : $('input[name=email]').val(),
        //     'password'      : $('input[name=password]').val(),
        //     'phone_number'  : '+62' + phoneNumber,
        //     'user_type'     : $('#userCreateSelect :selected').text(),
        //     'referral_code' : $('input[name=referral_code').val(),
        //     'is_staff'      : isStaff //$('#userCreateIsStaff').prop('checked')
        // };
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
                    <ControlLabel>Nama Kegiatan</ControlLabel>
                    <FormControl type='text' placeholder='Masukkan nama kegiatan' name='name'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Nama Lembaga</ControlLabel>
                    <FormControl componentClass='select' id='database__form-select'>
                        <option value='1'>1</option>
                        <option value='2'>Other</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Lokasi Kegiatan</ControlLabel>
                    <div id='admin-map' style={mapStyle}/>
                </FormGroup>
                <Button onClick={this.postNewActivity} bsStyle='success' style={btnStyle}>Tambah Kegiatan</Button>
            </form>
        );
    }
}

export default DatabaseForm;