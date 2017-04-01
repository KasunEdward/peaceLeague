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
    .controller('MapCtrl', function ($scope,$translate) {
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

    }, function(error){
        console.log(error);
        console.log("Could not get location");
    });


