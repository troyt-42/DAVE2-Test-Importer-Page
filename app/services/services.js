'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('MyAppServices', ['ngResource']);

MyAppServices.value('version', '2.0');

MyAppServices.factory('dataItem', ['$resource',
	function($resource){
		return $resource('backend/item.php', {}, {});
	}
]);
