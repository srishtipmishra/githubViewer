(function() {
  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      console.log(data);
      //$http.get($scope.user.repos_url)
      github.getRepos($scope.user).then(getRepos, onError);
    };

    var getRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function() {
      $scope.error = "could not fetch data";
    };
    
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "stargazers_count";
    console.log("in user controller");
    github.getUser($scope.username).then(onUserComplete,onError);
  };

  app.controller("UserController", UserController);

}());