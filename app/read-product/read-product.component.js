'use strict';
angular.module('readProduct').
component('readProduct',{
  templateUrl:'app/read-product/read-product.template.html',
  controller:['Product',
  function readProductController(Product){
    this.products=Product.query(),
    this.name="Kasun"
  }
  ]
});
