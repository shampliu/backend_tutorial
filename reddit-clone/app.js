var app = angular.module('flapperNews', []);

// app.factory('posts', [function() {
// 	var o = {
// 		posts = [];
// 	};
// 	return o; 

// }])

// app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
app.controller('MainCtrl', [
	'$scope', 
	function($scope) {
	$scope.test = 'Hello World!';
	// $scope.posts = posts.posts;
	$scope.posts = [
	  {title: 'post 1', upvotes: 5},
	  {title: 'post 2', upvotes: 2},
	  {title: 'post 3', upvotes: 15},
	  {title: 'post 4', upvotes: 9},
	  {title: 'post 5', upvotes: 4}
	];
	$scope.addPost = function(){
		if (!$scope.title || $scope.title == '') {
			$('#titleInput').attr('placeholder', 'Must submit a title!');
			return;
		}

	  $scope.posts.push({
	  	title: $scope.title, 
	  	linke: $scope.link, 
	  	upvotes: 0
	  });
	  $scope.title = '';
	  $scope.link = '';
	};
	$scope.incrementUpvotes = function(post) {
		post.upvotes++;
	}
	
}])