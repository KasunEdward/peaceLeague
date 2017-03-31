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
    });
