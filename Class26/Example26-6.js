let app = angular.module("CRUDApp", []);   //Creating module belonging to app CRUDApp --> ng-app
app.controller('CRUDController', function ($scope) {  //Creating Controller
	$scope.disabledFlag = false; //Initialize disabledFlag to false
	$scope.EmpModel = {};  //Initialize empty EmpModel object
	$scope.EmpModel.Name = 'John Doe'; //Set name in EmpModel
	$scope.fClick = function() { //Function defined on $scope
		alert('This is ng-click');
		$scope.disabledFlag = ! $scope.disabledFlag //Toggle disabled flag
	}
});  


