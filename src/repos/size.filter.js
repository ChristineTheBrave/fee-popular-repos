(function() {
  'use strict';

  angular.module('gh')
    .filter('sizeFilter', sizeFilter);

    /**
     * This function takes in the size of the repo and returns it in MB
     * @return {Number} Size of data
     */
  function sizeFilter() {
    return function doSizeFilter(size) {
      return (size/1000) +'MB';
    };
  }


}());
