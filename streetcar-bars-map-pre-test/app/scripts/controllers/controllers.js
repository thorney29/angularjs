  // 'use strict';
/**
 * @ngdoc function
 * @name mapApp.controller:MapController
 * @description
 * @id MapController
 * Controller of the mapApp
 */
(function (Controllers, undefined)
{
  mapApp.Modules.mapApp.controller("ListController", ['$scope', 'service', 
    function ($scope, service)
  {
    var promise = service.getBars();
    promise.then(function (data)
    {
      $scope.bars = data.mapApp.Bars;
      console.log($scope.bars);
    })
  }]);
}(mapApp.Controllers = mapApp.Controllers || {} ));


// var bars = [];
// var mapApp = angular.module('mapControllers', ['$scope', 'service']);
// mapApp.controller('ListController', function ($scope, $http) {
//    $http.get('scripts/bars.json').
//     success(function(data, status, headers, config) {
//         //this happens if everything works
//         $scope.bars = data;
//         $scope.markers = [];
//         var bounds = new google.maps.LatLngBounds();
//         var myLatlng100 = new google.maps.LatLng(45.523007, -122.657890);
//         var mapOptions = {
//                 center: myLatlng100,
//                 styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
//                 zoom: 15,
//                 draggable: false,
//                 scrollwheel: false,
//                 disableDoubleClickZoom: true,
//                 zoomControl: false             
//         };
//         var infoWindow = new google.maps.InfoWindow();
//          // Create a renderer for directions and bind it to the map.
//         var rendererOptions = {
//                 map: $scope.map
//         };
//         var directionsDisplay;
//         var directionsService;
//         directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
//         $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
//         directionsDisplay.setMap($scope.map);
       
//         $scope.openInfoWindow = function(e, selectedMarker){
//             e.preventDefault();
//             google.maps.event.trigger(selectedMarker, 'click');
//         }; 
//         var createMarker = function(bar){
//             var marker = new google.maps.Marker({
//                 map: $scope.map,
//                 position: new google.maps.LatLng(bar.lat, bar.lng),
//                 title: bar.name
//             });
//             marker.content = '<div id = "'+bar.name+'" class="contentString"><img src="' + 
//             bar.image +
//             '"><br/>'+ 
//             bar.address +
//             ' ' +  
//             '<br /><button id="spinner" class="button" onclick="getDir('+bar.lat+', '+bar.lng+')">Get Directions</button>' +
//             '</div>';
//             marker.image = bar.image;
              
//             google.maps.event.addListener(bar, 'click', function(){
//                 infoWindow.setContent('<a class="info-window" href="' + bar.url + '">' +'<h3 class="info-window" >' + bar.name + '</h3>' + '</a>' +  marker.content);
//                 infoWindow.open($scope.map, marker);
//             });
//               google.maps.event.addListener(marker, 'click', function(){
//                 infoWindow.setContent('<a class="info-window" href="' + bar.url + '">' +'<h3 class="info-window" >' + bar.name + '</h3>' + '</a>' +  marker.content);
//                 infoWindow.open($scope.map, marker);
//             });
//             google.maps.event.addListener(marker, 'dragstart', function() {
//                 disableMovement(true);
//             });

//             google.maps.event.addListener(marker, 'dragend', function() {
//                 disableMovement(false);
//             });         
       
//             $scope.markers.push(marker);
//          };  
//         $scope.setAllMap = function() {
//             for (var i = 0; i < $scope.bars.length; i++){
//               createMarker($scope.bars[i]);
//             }  
//         }
//         $scope.setAllMap = function() {
//             for (var i = 0; i < $scope.bars.length; i++){
//               createMarker($scope.bars[i]);
//             }  
//         }
//         $scope.setAllMap(); 

//         $scope.clearMarkers = function(map) {
//             $scope.setAllMap(null);
//          }
//         $(".hideit").on("click", function(){
//                  $scope.clearMarkers($scope.map);
//                  $scope.bars = [];
//                  alert('what the heck is going on here');
               
//         });

//         $("#clearPanel").on("click", function(map){
//                 document.getElementById("panel").innerHTML = " ";
//                 $('h3.map').show();
//                 $('#clearPanel').hide();
//           });
        
//     console.log($scope.bars);
//     }).
//     error(function(data, status, headers, config) {
//       console.log("Did not compute");
//     });
// });   

// function disableMovement(disable) {
//     var mapOptions;
//     if (disable) {
//         mapOptions = {
//             draggable: false,
//             scrollwheel: false,
//             disableDoubleClickZoom: true,
//             zoomControl: false
//         };
//     } else {
//         mapOptions = {
//             draggable: true,
//             scrollwheel: true,
//             disableDoubleClickZoom: false,
//             zoomControl: true
//         };
//     }
//     map.setOptions(mapOptions);
// }
// function getDir(lat,lng,markers,map,myOptions) {
//     run_waitMe();
//     document.getElementById("panel").innerHTML = " ";
//     // If the browser supports the Geolocation API
//         if (typeof navigator.geolocation == "undefined") {
//           $("#error").text("Your browser doesn't support the Geolocation API");
//           return;
//         }
//          // Save the positions' history
//          var path = [];
//          navigator.geolocation.getCurrentPosition(function (position) {  //This gets the
//             // Create the map
//              // var myOptions = {
//              //    styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
//              //    zoom: 15,
//              //    draggable: false,
//              //    scrollwheel: false,
//              //    disableDoubleClickZoom: false,
//              //    zoomControl: true,
//              //    center : path[0],
//              //    mapTypeId : google.maps.MapTypeId.TRANSIT
//              //  };
//             var map = new google.maps.Map(document.getElementById("map"), myOptions);
 
//             var latitude = position.coords.latitude;                       //users current
//             var longitude = position.coords.longitude;                    
//             var start = new google.maps.LatLng(latitude, longitude);     //Creates variable for map coordinates
//                //location
//                path.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
//                  // Creates the polyline object
//                var polyline = new google.maps.Polyline({
//                 map: map,
//                 path: path,
//                 strokeColor: '#0000FF',
//                 strokeOpacity: 0.7,
//                 strokeWeight: 1
//                });
               
//             var directionsService = new google.maps.DirectionsService();
//             var directionsDisplay = new google.maps.DirectionsRenderer();
//             directionsDisplay.setMap(map);
//             directionsDisplay.setPanel(document.getElementById('panel'));

//             var request = {
//               origin: start,
//               destination: new google.maps.LatLng(lat, lng),
//               travelMode: google.maps.DirectionsTravelMode.TRANSIT
//             };
//             // Removes the overlays from the map, but keeps them in the array
//             function clearOverlays() {
//               if (markersArray) {
//                 for (i in markersArray) {
//                   markersArray[i].setMap(null);
//                 }
//               }
//             }             
//             directionsService.route(request, function (response, status) {
//                 if (status == google.maps.DirectionsStatus.OK) {
//                    directionsDisplay.setDirections(response);
//                     $('.waitMe').hide();
//                     $('h3.map').hide();
//                     $('#clearPanel').show();
//                     }
//             });
//       });
// }
// $("#clearPanel").on("click", function(map){
//         document.getElementById("panel").innerHTML = " ";
//         $('h3.map').show();
//         $('#clearPanel').hide();
// });
// // none, bounce, rotateplane, stretch, orbit, 
// // roundBounce, win8, win8_linear or ios
// var current_effect = 'bounce'; // 

// function run_waitMe(effect){
//     $('#spinHere').waitMe({
//         //none, rotateplane, stretch, orbit, roundBounce, win8, 
//         //win8_linear, ios, facebook, rotation, timer, pulse, 
//         //progressBar, bouncePulse or img
//         effect: 'bounce',

//         //place text under the effect (string).
//         text: 'Getting Directions',

//         //background for container (string).
//         bg: 'rgba(255,255,255,0.7)',

//         //color for background animation and text (string).
//         color: '#000',

//         //change width for elem animation (string).
//         sizeW: '',

//         //change height for elem animation (string).
//         sizeH: '',

//         // url to image
//         source: ''

//         });
//     }


 