/* global google */
/* global $ */

import React, { Component } from 'react';
import axios from 'axios';
import './css/map.css';

class Map extends Component {
    constructor(props) {
        super(props);

        this.addMarker = this.addMarker.bind(this);
        this.initMap = this.initMap.bind(this);
        this.getMarker = this.getMarker.bind(this);
    }

    componentDidMount() {
        this.getMarker();
    }

    initMap = markerData => {
        var indonesia = {lat: -1.8409802, lng: 119.93084848};
        var map = new google.maps.Map(document.getElementById('map'), {
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

        for(var i=0; i<markerData.length; i++) {
            this.addMarker(markerData[i], map);
        }

        // // This event listener calls addMarker() when the map is clicked.
        // google.maps.event.addListener(map, 'click', event => {
        //     this.addMarker(event.latLng, map);
        // });
    }

    getMarker = () => {
        axios.get('http://localhost:5000/api/Activity').then(res => {
            this.initMap(res.data.data);
        });
    }

    // Adds a marker to the map.
    addMarker = (data, map) => {
        console.log(data);
        
        var location = {
            lat: data['lat'],
            lng: data['lng']
        };

        var marker = new google.maps.Marker({
            position: location,
            // label: {
            //     text: '1',//labelIndex.toString(),
            //     color: 'white'
            // },
            icon: {
                url: "http://maps.google.com/mapfiles/ms/micons/red-dot.png", // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
            },
            map: map
        });

        // var position = this.splitLocation(location);
        // console.log(position);

        // var li = document.createElement('li');
        // li.innerHTML = location;
        // $('#list-point').append(li);



        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';
        
        var infowindow = new google.maps.InfoWindow({
            content: this.createInfoWindow(data)
        });

        marker.addListener('click', function(e) {
            infowindow.open(map, marker);
            // var icon = {
            //     url: "http://maps.google.com/mapfiles/ms/micons/green-dot.png", // url
            //     scaledSize: new google.maps.Size(50, 50), // scaled size
            // };
            // marker.setIcon(icon);
            // prevMarker = nowMarker;
            // nowMarker = marker;
            // addPolyline(prevMarker, nowMarker);
            // if(prevMarker !== nowMarker) {
            //     var icon = {
            //         url: "http://maps.google.com/mapfiles/ms/micons/red-dot.png", // url
            //         scaledSize: new google.maps.Size(50, 50), // scaled size
            //     };
            //     prevMarker.setIcon(icon);
            //     nowMarker.setIcon(icon);
            //     prevMarker = null;
            //     nowMarker = null;
            // }
        });

        // markers.push(marker);
        // markList.push(mark);
        // labelIndex++;
    }

    createInfoWindow = data => {
        var div = document.createElement('div');

        // Create title
        var h2 = document.createElement('h2');
        h2.innerHTML = data['name'];

        var lembagaName;
        $.ajax({
            url: 'http://localhost:5000/api/Lembaga/' + data.lembaga_id,
            type: 'GET',
            async: false,
            success: function(result){
                lembagaName = result.name;
                console.log('/api/Lembaga/' + data.lembaga_id);
            },
            error: function(result){
                console.log(result);
            }
        });

        // Create lembaga name
        console.log(lembagaName);
        var h4 = document.createElement('h4');
        h4.innerHTML = 'Lembaga: ' + lembagaName;

        // Create body content
        var body = document.createElement('div');

        div.appendChild(h2);
        div.appendChild(h4);
        return div;
    }

    splitLocation = (location) => {
        var lokasi = location.toString().substr(1).slice(0, -1).split(" ");
        var lat = lokasi[0].slice(0, -1);
        var lng = lokasi[1];
        return {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        };
    }

    render() {
        var mapStyle = {
            height: '700px'
        };

        return (
            <div id='map-grid'>
                <div id='map-panel'>
                    <div id='map-panel__title'>
                        <h1>Persebaran Kegiatan</h1>
                        <h1>Pengabdian Masyarakat</h1>
                        <p>Demi mewujudkan Tri Dharma Perguruan Tinggi, ITB telah memberikan kontribusi<br/> kepada masyarakat melalui kegiatan pengabdian masyarakat yang dibagi menjadi<br/> <i>Community Service</i>, <i>Community Development</i>, dan KKN Tematik. Sampai saat ini kegiatan<br/> pengabdian masyarakat tersebut telah mencakup berbagai daerah di Indonesia.</p>
                    </div>
                </div>
                <div style={mapStyle} id='map'/>
            </div>
        );
    }
}

export default Map;