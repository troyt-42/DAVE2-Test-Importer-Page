/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////    DAVE 2.0 API
////    Written by: Paul Kazmir
////    Date: 2014-00-00
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function httpCtrl($scope, $http, $window) {

  
    // ITEM-META - use this for grabbing item related information
    $scope.requestItemMeta = function($url) {
        $scope.url = 'backend/item.php';
        $scope.agent = 'item-meta';
        $scope.reqtype = 'get'
        
        $http.post($scope.url, {"agent" : $scope.agent, "reqtype" : $scope.reqtype, "item_id" : $scope.item_id}).
        success(function(data, status) {
            $scope.status = status;
            $scope.data = data;
            $scope.item = data.itm.ItemID;     // - will remove after testing
        }).
        error(function(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;         
        });
    };

}