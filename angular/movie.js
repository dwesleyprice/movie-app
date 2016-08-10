var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){

$scope.searchStuff = function(){
	var movieURL = 'https://api.themoviedb.org/3/search/multi?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';
	$scope.imagePath = 'http://image.tmdb.org/t/p/w300';
	var searchString = "";
	searchString = $scope.search;
	console.log(searchString);

	$http({
		method: 'GET',
		url: movieURL+searchString,
	}).then(function successFunction(movieData){
			$scope.movieArray = movieData.data.results;
	}, function failureFunction(movieData){

	}
	);
 }

});