var myApp = angular.module('myApp', [
  'ngRoute',
  'appControllers'
])
.constant('FIREBASE_URL', 'https://attendance100.firebaseio.com/');

var appControllers = angular.module('appControllers', ['ngAnimate', 'firebase']);

//Link Routes to Templates & Controllers
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/login', {
    templateUrl: 'views/login.html',
    controller: 'RegistrationController'
  }).
  when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegistrationController'
  }).
  when('/meetings', {
    templateUrl: 'views/meetings.html',
    controller: 'MeetingsController'
  }).
  when('/checkins', {
    templateUrl: 'views/checkins.html',
    controller: 'CheckInsController'
  }).
  otherwise({
    redirectTo: '/meetings'
  });
}]);
