'use strict';
angular.
module('core.product').
factory('Product',['$resource',
function($resource){
  return $resource('api/product/read.php',{},{
    query:{
      method:'GET',
      isArray:true
    }
  });
}
]);