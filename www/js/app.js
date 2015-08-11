// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('batteryStatus', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("ExampleController", function($scope,$rootScope,$ionicPlatform,$cordovaBatteryStatus){
  $ionicPlatform.ready(function(){
    $rootScope.$on("$cordovaBatteryStatus:status", function(event, args){
      console.log(args);
      $scope.batteryLevel = args.level;
      console.log($scope.batteryLevel);
      $scope.isPluggedIn = args.isPlugged;
      console.log($scope.isPluggedIn);
      if(args.isPlugged)
      {
        alert("Charging -> " + args.level + " %");
      }
      else
      {
        alert("Battery -> " + args.level + " %");
      }
    });
  });
});
