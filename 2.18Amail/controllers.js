var aMailServices = angular.module('AMail', []);

function eamilRouteConfig($routeProvider){
	$routeProvider
	.when('/',{
		controller: ListController,
		templateUrl: 'list.html'
	})
	.when('/view/:id',{
		controller: DetailController,
		templateUrl: 'detail.html'
	}).
	otherwise({
		redirectTo: '/'
	});
}

aMailServices.config(eamilRouteConfig);

messages = [{
	id: 0, sender: 'jean@qq.com', subject: 'hi there,old friend',date: 'Dec 7,2013', recipients: ['greg@someconpanycom'], message: 'Hey,we should get together for lunch sometime and catch up.'+'There are many things we should collaborate'
},{
	id: 1, sender: 'maria@qq.com', subject: 'hi there,old friend',date: 'Dec 7,2013', recipients: ['greg@someconpanycom'], message: 'Hey,we should get together for lunch sometime and catch up.'+'There are many things we should collaborate'
},{
	id: 2, sender: 'bill@qq.com', subject: 'hi there,old friend',date: 'Dec 7,2013', recipients: ['greg@someconpanycom'], message: 'Hey,we should get together for lunch sometime and catch up.'+'There are many things we should collaborate'
}];

function ListController($scope){
	$scope.messages = messages;
}

function DetailController($scope, $routeParams){
	$scope.message = messages[$routeParams.id];
}