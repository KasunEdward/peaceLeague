/**
 * Created by Kasun Edward on 3/31/2017.
 */
angular.module('myApp.controllers',['cordovaGeolocationModule'])
    .controller('langCtrl',function($scope,$translate){
        $scope.language=null;
        $scope.languages=['en','si','ta'];
        $scope.updateLanguage=function(language){
            //$rootScope.var=language;
           // console.log($rootScope.var);
            $translate.use(language);
        }
    })


    .controller('loginCtrl', function($scope,$window) {

        $scope.loginSave= function() {
            if($scope.username == "kasun" && $scope.password == "1234"){
                $window.open('home.html','_blank');
                console.log("correct");
            } else {
                console.log("incorrect");
                $window.alert("Invalid username or password...!!!");
            }
        }
    })

    .controller('numLoginCtrl', function($scope,$window) {

        $scope.numLoginSave= function() {

            if($scope.number == "1234"){
                console.log("correct");
                $window.open('home.html','_blank');
                //window.location = (window.location + 'home.html');
            } else {
                console.log("incorrect");
                $window.alert("Invalid username or password...!!!");
            }
        }
    })
    .controller('createEventLocCtrl', function ($scope, cordovaGeolocationService) {
        var options = {timeout: 10000, enableHighAccuracy: true};

        cordovaGeolocationService.getCurrentPosition(function(position){

         var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(latLng.lat());
            console.log(latLng.lng());
        //var latLng = new google.maps.LatLng(7.8731, 80.7718);


        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("gmaps"), mapOptions);
        $scope.create_event_loc = new google.maps.Marker();

        $scope.map.addListener('click', function(e) {
            addMarker(e.latLng, $scope.map);
        });
        function addMarker(latLng, map){
            $scope.create_event_loc.setMap(null);
            $scope.create_event_loc = new google.maps.Marker({
                position: latLng,
                map: map,
                draggable : true
            });
            angular.element("#lat").val(latLng.lat());
            angular.element("#lng").val(latLng.lng());
        }
        }, function(error){
            var latLng = new google.maps.LatLng(6.9176, 79.8633);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            $scope.map = new google.maps.Map(document.getElementById("gmaps"), mapOptions);
            $scope.create_event_loc = new google.maps.Marker();

            $scope.map.addListener('click', function(e) {
                addMarker(e.latLng, $scope.map);
            });
            function addMarker(latLng, map){
                $scope.create_event_loc.setMap(null);
                $scope.create_event_loc = new google.maps.Marker({
                    position: latLng,
                    map: map,
                });
            }
        },options);

    }, function(error) {
            console.log(error);
            console.log("Could not get location");
    })
    .controller('MapCtrl', function ($scope,$translate,$http) {
        //$translate.use($rootScope.language);
        var options = {timeout: 10000, enableHighAccuracy: true};

        //$cordovaGeolocation.getCurrentPosition(options).then(function(position){

        //  var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var latLng = new google.maps.LatLng(7.8731, 80.7718);


        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        

        $scope.map = new google.maps.Map(document.getElementById("gmaps"), mapOptions);
        $http({
            method: 'POST',
            url: 'api/data/read.php'
        }).then(function successCallback(response) {
            console.log(response);
            var num=response.data.length;
            for(var i=0;i<num;i++){
                console.log(response.data[i].longitude);
                var latLng = new google.maps.LatLng(response.data[i].longitude, response.data[i].latitude);
                var infowindow = new google.maps.InfoWindow({
                    content: response.data[i].description
                });
                var marker = new google.maps.Marker({
                    map:$scope.map,
                    position: latLng,
                    title:response.data[i].name
                });
                marker.setMap($scope.map);
                marker.addListener('click', function() {
                    infowindow.open($scope.map, marker);
                });
            }


// To add the marker to the map, call setMap()

        }, function errorCallback(response) {
            // called asynchronously if an error occurs

        });

    }, function(error){
        console.log(error);
        console.log("Could not get location");
    })

    .controller('createEventCtrl', function ($scope,$http) {
        $scope.eventData = {
            "eventName" : "",
            "startDate" : "",
            "startTime" : "",
            "endDate" : "",
            "endTime" : "",
            "lat" : "",
            "lng" : "",
            "description" : ""
        }

        $scope.createEvent = function(){
            var inputData = $scope.eventData;
            inputData.startDate = angular.element('#startDate').val();
            inputData.startTime = angular.element('#startTime').val();
            inputData.endDate = angular.element('#endDate').val();
            inputData.endTime = angular.element('#endTime').val();
            inputData.lat = angular.element('#lat').val();
            inputData.lng = angular.element('#lng').val();
            console.log($scope);
            console.log(inputData);
        }
    });


