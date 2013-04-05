
var app = angular.module("app",["ngResource"]);
app.
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/items', {templateUrl: 'items-template',   controller: ItemsCtrl}).
      when('/items/:id', {templateUrl: 'items-view-template',   controller: ItemViewCtrl}).
      when('/item', {templateUrl: 'items-view-template',   controller: ItemAddCtrl}).
      otherwise({redirectTo: '/items'});
}]);