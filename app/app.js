/**
 * Created by Kasun Edward on 3/31/2017.
 */
angular.module('myApp',['myApp.controllers','pascalprecht.translate'])
    .config(function($translateProvider){
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'translations/',
                suffix: '.json'
            })

        $translateProvider.preferredLanguage('en');


});
