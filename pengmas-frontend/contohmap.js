var labelIndex = 1;
var markers = [], markList = [];
var lines = [], lineList = [];
var answerLines = [];
var nowMarker, prevMarker;
var adjMatrix, astarFile, map;

var ITB = {lat: -6.89148, lng: 107.6106591};
var alun = {lat: -6.9219275, lng: 107.6070546};

function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: ITB,
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
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);
    });
}

function changeLocation(coord) {
    map.setCenter(coord);
    deleteLines();
    deleteMarkers();
}

function gotoITB() {
    map.setCenter(ITB);
}

function splitLocation(location) {
    var lokasi = location.toString().substr(1).slice(0, -1).split(" ");
    var lat = lokasi[0].slice(0, -1);
    var lng = lokasi[1];
    var loc = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
    };
    return loc;
}

// Adds a marker to the map.
function addMarker(location, map) {
    var marker = new google.maps.Marker({
        position: location,
        label: {
            text: labelIndex.toString(),
            color: 'white'
        },
        icon: {
            url: "http://maps.google.com/mapfiles/ms/micons/red-dot.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
        },
        map: map
    });

    var position = splitLocation(location);
    var mark = [position["lat"], position["lng"]];

    var li = document.createElement('li');
    li.innerHTML = location;
    $('#list-point').append(li);

    marker.addListener('click', function(e) {
        var icon = {
            url: "http://maps.google.com/mapfiles/ms/micons/green-dot.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
        };
        marker.setIcon(icon);
        prevMarker = nowMarker;
        nowMarker = marker;
        addPolyline(prevMarker, nowMarker);
        if(prevMarker !== nowMarker) {
            var icon = {
                url: "http://maps.google.com/mapfiles/ms/micons/red-dot.png", // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
            };
            prevMarker.setIcon(icon);
            nowMarker.setIcon(icon);
            prevMarker = null;
            nowMarker = null;
        }
    });

    markers.push(marker);
    markList.push(mark);
    labelIndex++;
}

function setMapOnAllMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function setMapOnAllLines(list, map) {
    for (var i = 0; i < list.length; i++) {
        list[i].setMap(map);
    }
}

function deleteLines() {
    setMapOnAllLines(lines, null);
    setMapOnAllLines(answerLines, null);
    lines = [];
    $('#list-paths').empty();
}

function deleteMarkers() {
    setMapOnAllMarkers(null);
    deleteLines();
    markers = [];
    answerLines = [];
    labelIndex = 1;
    $('#list-point').empty();
}

function addPolyline(marker_a, marker_b) {
    var leftIndex = marker_a.label["text"];
    var rightIndex = marker_b.label["text"];

    var left = splitLocation(markers[leftIndex-1].position);
    var right = splitLocation(markers[rightIndex-1].position);
    var coord = [left, right];

    var line = new google.maps.Polyline({
        path: coord,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
    });

    var path = [markers[leftIndex-1].getPosition(), markers[rightIndex-1].getPosition()];
    var distance = google.maps.geometry.spherical.computeDistanceBetween(path[0], path[1]);

    var li = document.createElement('li');
    li.innerHTML = leftIndex.toString() + ", " + rightIndex.toString() + " - " + distance.toString();
    $('#list-paths').append(li);

    var tempLine = {
        first: leftIndex,
        next: rightIndex,
        distance: distance
    };

    lines.push(line);
    lineList.push(tempLine);
}

function pathFinder() {
    var start = document.getElementById('input1').value - 1;
    var finish = document.getElementById('input2').value - 1;

    adjMatrix = new Array(markers.length);
    for(var i=0; i<markers.length; i++) adjMatrix[i] = new Array(markers.length);
    for(var i=0; i<markers.length; i++) {
        for(var j=0; j<markers.length; j++) {
            adjMatrix[i][j] = -1;
        }
    }
    for(var i=0; i<lineList.length; i++) {
        var x = lineList[i];
        adjMatrix[x["first"]-1][x["next"]-1] = x["distance"];
        adjMatrix[x["next"]-1][x["first"]-1] = x["distance"];
    }
    astarFile = [
        adjMatrix,
        markList,
        start.toString() + " " + finish.toString()
    ];
    
    $.post("shortest" , JSON.stringify(astarFile), function(data) {
        var dataPath = JSON.parse(data);
        showAnswer(dataPath);
    });
    event.preventDefault();
}

function showAnswer(data) {
    document.getElementById('ans').innerHTML = "Distance: ";
    setMapOnAllLines(answerLines, null);
    answerLines = [];
    for(var i=0; i<data[0].length-1; i++) {
        var left = splitLocation(markers[data[0][i]].position);
        var right = splitLocation(markers[data[0][i+1]].position);
        var coord = [left, right];

        var line = new google.maps.Polyline({
            path: coord,
            geodesic: true,
            strokeColor: '#45f442',
            strokeOpacity: 1.0,
            strokeWeight: 4,
            map: map
        });
        answerLines.push(line);
    }
    document.getElementById('ans').innerHTML += (data[1].toString() + " meter");
}