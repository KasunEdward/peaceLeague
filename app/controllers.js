/**
 * Created by Kasun Edward on 3/31/2017.
 */
angular.module('myApp.controllers',[])
    .controller('langCtrl',function($scope,$translate){
        $scope.language=null;
        $scope.languages=['en','si','ta'];
        $scope.updateLanguage=function(language){
            //$rootScope.var=language;
           // console.log($rootScope.var);
            $translate.use(language);
        }
    })
    .controller('MapCtrl', function ($scope,$translate,$http) {
        //$translate.use($rootScope.language);
        $http({
            method: 'POST',
            url: 'api/data/read.php'
        }).then(function successCallback(response) {
            console.log("Success");
        }, function errorCallback(response) {
           console.log(response);
        });
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

