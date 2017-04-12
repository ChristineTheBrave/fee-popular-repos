(function() {
  'use strict';

  console.log('Hello inside the repo directive iffe');

  angular.module('gh')
    .directive('repo', repo);

  function repo() {
    let $ = angular.element;

    console.log('Wassup inside repo function in directive');
    return {
      templateUrl: 'repos/repo.template.html',
      restrict: 'E',
      scope: {
        repo: '=repo'
      },
      link: setUpCollapse
    };

    function setUpCollapse(scope, element) {
      $(element)
        .find('header')
        .on('click', function togglePanelBody() {
          $(element).find('section').toggleClass('hidden');
        });
    }
  }



}());
