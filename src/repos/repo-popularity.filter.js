(function() {
  'use strict';

  angular.module('gh')
    .filter('repoPopularity', repoPopularity);

  function repoPopularity() {
    return function doRepoPopularity(repos) {

      if(!Array.isArray(repos)) {
        return repos;
      }
      let repoCopy = [].concat(repos);

      return repoCopy.sort(function doRepoSort(repo1, repo2) {
        let popularityRepo1 = ( (repo1.stargazers_count) + (2*(repo1.forks)) + (1/2)*(repo1.open_issues_count) );
        let popularityRepo2 = ( (repo2.stargazers_count) + (2*(repo2.forks)) + (1/2)*(repo2.open_issues_count) );
        return popularityRepo2 - popularityRepo1;
      });
    };
  }



}());
