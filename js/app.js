// angular.module('flickrApp', [])
// .config(function($httpProvider){
//   $httpProvider.defaults.useXDomain = true;
// })
//
// .controller('flickrController', function($scope, $http){
//   var url = "https://api.flickr.com/services/rest";
//   var params = {
//     method: "flickr.photos.search",
//     api_key: "03f566bb6d192c19c91ade74612807c4",
//     tags: search_tag,
//     format: "json",
//     nojsoncallback: 1
//   };
//   $http({
//     method: "GET",
//     url: url,
//     params: params
//   })
//   .then(function(response){
//     $scope.results = response.data.photos.photo;
//   },
//   function(response){
//     alert('error');
//   });
// });
//
//

var flickrApp = angular.module('flickrApp',[]);

flickrApp.config(function($httpProvider){
  $httpProvider.defaults.useXDomain = true;
});

flickrApp.controller("flickrController", function ($scope, $http) {
    $scope.loading = false;
    $scope.getPhotos = function (search_tag) {
      $scope.loading = true;
      $http.jsonp("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=03f566bb6d192c19c91ade74612807c4&tags="+search_tag+"&format=json&jsoncallback=JSON_CALLBACK")
        .then(function (data) {
          $scope.images = response.data.photos.photo;
          $scope.loading = false;
        }).
        error(function (data) {
          $scope.images = "Request failed";
          $scope.loading = false;
        });
    };
});
