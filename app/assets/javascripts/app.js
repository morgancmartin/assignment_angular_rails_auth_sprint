AuthSprint = angular.module("authSprint", ["ui.router", 'restangular', 'Devise']);


AuthSprint.factory('_', ['$window', function(){
  return $window._;
}]);

AuthSprint.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/show');

  $stateProvider.state("show", {
    url: "/show",
    views: {
      "": {
        templateUrl: "/templates/users/show.html.erb",
        controller: "UsersCtrl"
      }
    }
  });
});

AuthSprint.config(
  ["$httpProvider",
  function($httpProvider) {
  var token = $('meta[name=csrf-token]')
  .attr('content');
  $httpProvider
  .defaults
  .headers
  .common['X-CSRF-Token'] = token;
}]);

// Restangular config
AuthSprint.config(
  ['RestangularProvider',
  function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);
