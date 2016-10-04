AuthSprint.controller("UsersCtrl", ["$scope", "Restangular", 'Auth', function($scope, Restangular, Auth) {

  Auth.currentUser().then(function(user){
    $scope.currentUser = user;
  });
}]);
