let app = angular.module("CRUDApp", []);
app.controller('CRUDController', function ($scope) {
	$scope.EmpModel = {};
	$scope.EmpModel.firstName = 'John';
	$scope.EmpModel.lastName = 'Doe';
	$scope.EmpModel.Salary = 3245.50;
});