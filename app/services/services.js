'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('MyAppServices', ['ngResource']);

app.value('version', '2.0');

app.factory('dataItem', ['$resource',
	function($resource){
		return $resource('backend/dataItems.json', {}, {});
	}
	]);

app.factory('dataItemDetail',['$resource',
	function($resource){
		return $resource('backend/dataItemDetails.json', {}, {});
	}
	]);