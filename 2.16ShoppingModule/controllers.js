var shoppingModule = angular.module('shoppingModule',[]);
shoppingModule.factory('Items',function(){
	var items = {};
	items.query = function(){
		return [
			{title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
			{title: 'Poka dots', description: 'dots with polka', price: 2.95},
			{title: 'Pebbles', description: 'Just little rocks', price: 6.95}
		];
	};
	return items;
})

function ShoppingController($scope,Items){


}