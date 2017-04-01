/**
 * Created by Kasun Edward on 3/31/2017.
 */
angular.module('myApp',['ngRoute','myApp.controllers','pascalprecht.translate'])
    .run(function($rootScope){
    $rootScope.language='en';
})
    .config(function($routeProvider,$translateProvider){
        $routeProvider
            .when('/',{
                templateUrl:"index.html"
            });
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'translations/',
                suffix: '.json'
            })

        $translateProvider.preferredLanguage('en');


});
