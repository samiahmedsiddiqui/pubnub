window.lat = 37.8199;
window.lng = -122.4783;
var map;
var mark;
var lineCoords = [];

var initialize = function() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center:{
      lat: lat,
      lng: lng
    },
    zoom: 12
  });
  mark = new google.maps.Marker({
    position: {
      lat: lat,
      lng: lng
    },
    map: map
  });
  lineCoords.push(new google.maps.LatLng(window.lat, window.lng));
};
window.initialize = initialize;

var redraw = function(payload) {
  lat = payload.message.lat;
  lng = payload.message.lng;
  map.setCenter({
    lat: lat,
    lng: lng,
    alt: 0
  });
  mark.setPosition({
    lat: lat,
    lng: lng,
    alt: 0
  });
  lineCoords.push(new google.maps.LatLng(lat, lng));
  var lineCoordinatesPath = new google.maps.Polyline({
    path: lineCoords,
    geodesic: true,
    strokeColor: '#2E10FF'
  });

  lineCoordinatesPath.setMap(map);
};

var pnChannel = "map-channel";

var googleTrackingApp = angular.module('googleMapTrackingDemo', ['pubnub.angular.service']);
  
googleTrackingApp.run(['Pubnub', function (Pubnub) {
  Pubnub.init({
    publishKey: 'YOUR_PUB_KEY', // Add you Publish Key
    subscribeKey: 'YOUR_SUB_KEY' // Add your Subscribe Key
  });
}]);
  
googleTrackingApp.controller('RedrawCtrl', function($scope, $rootScope, Pubnub) {
  Pubnub.subscribe({
    channels: [pnChannel],
    triggerEvents: ['message']
  });

  setInterval(function() {
    Pubnub.publish({
      channel: pnChannel,
      message: {
        lat: window.lat + 0.001,
        lng: window.lng + 0.01
      }
    });
  }, 5000);

  $rootScope.$on(Pubnub.getMessageEventNameFor(pnChannel), function (ngEvent, envelope) {
    $scope.$apply(function () {
      redraw(envelope);
    });
  });    
});

navigator.geolocation.getCurrentPosition(function(position) {
  window.lat = position.coords.latitude;
  window.lng = position.coords.longitude;
});
