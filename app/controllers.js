/**
 * Created by Kasun Edward on 3/31/2017.
 */
angular.module('myApp.controllers',['cordovaGeolocationModule'])
    .controller('langCtrl',function($scope,$translate,$rootScope){
        $scope.language=null;
        $scope.languages=['en','si','ta'];
        $scope.updateLanguage=function(language){
            $rootScope.language=language;
           // console.log($rootScope.var);
            $translate.use($rootScope.language);
        }
    })

    .controller('createEventLocCtrl', function ($scope, cordovaGeolocationService,$rootScope) {
        $translate.use($rootScope.language);
        var options = {timeout: 10000, enableHighAccuracy: true};

        cordovaGeolocationService.getCurrentPosition(function(position){

         var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //var latLng = new google.maps.LatLng(7.8731, 80.7718);


        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("gmaps"), mapOptions);
        },options);

    }, function(error) {
            console.log(error);
            console.log("Could not get location");
    })

    .controller('MapCtrl', function ($scope,$translate,$http) {
        $translate.use($rootScope.language);
        var options = {timeout: 10000, enableHighAccuracy: true};

        //$cordovaGeolocation.getCurrentPosition(options).then(function(position){

        //  var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var latLng = new google.maps.LatLng(7.8731, 80.7718);


        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.a=3;
        $scope.map = new google.maps.Map(document.getElementById("gmaps"), mapOptions);
        // var marker = new google.maps.Marker({
        //     position: latLng,
        //     map: $scope.map,
        //     title: 'Hello World!'
        // });
        // marker.setMap($scope.map);
        $http({
            method: 'GET',
            url: 'api/data/read.php'
        }).then(function successCallback(response) {
            var num=response.data.length;
            console.log(num);
            console.log(response.data[0]);
            for(i=0;i<num;i++){
                var latLng = new google.maps.LatLng(7.8731, 80.7718);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: $scope.map,
                    title: 'Hello World!'
                });
                marker.setMap($scope.map);
            }


        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
        //$translate.use($rootScope.language);



        }, function(error){
            console.log(error);
            console.log("Could not get location");
        });;

