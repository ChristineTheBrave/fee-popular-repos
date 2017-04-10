(function() {
  'use strict';

  console.log('Hello inside the repo directive iffe');

  angular.module('gh')
    .directive('repo', repo);

  function repo() {
    console.log('Wassup inside repo function in directive');
    return {
      templateUrl: 'repos/repo.template.html',
      restrict: 'E'

    };
  }



}());
