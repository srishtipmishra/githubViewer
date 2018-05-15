(function() {
  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval, $location) {

    var countDownTimer = function() {
      $scope.countDown -= 1;
      if ($scope.countDown < 1) {
        $scope.search($scope.username)
      }
    };

    var countDownInterval = null;
    var startCountdown = function() {
      countDownInterval = $interval(countDownTimer, 1000, $scope.countDown);
    };
    
    $scope.search = function(username) {
      console.log("in serach");
      //github.getUser(username).then(onUserComplete, onError);

      if(countDownInterval)
      {
        $interval.cancel(countDownInterval);
        $scope.countDown = 0;
      }
      console.log("/user/"+username);
      $location.path("/user/"+username);
      //$http.get("https://api.github.com/users/"+ username)
    };

    $scope.username = "angular";
    //$scope.repoSortOrder = "stargazers_count";
    $scope.countDown = 5;
    startCountdown();
  };

  app.controller("MainController", MainController);

}());