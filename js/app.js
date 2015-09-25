'use strict';

var Earnest = angular.module('Earnest', []);

Earnest.controller('UserCtrl',function ($scope) {
  var testUser = {
    name : 'Test User',
    roles : {
      admin: false,
      user: true,
      custom: null
    }
  };

  $scope.newUser = {
    name: null,
    roles: {
      admin: false,
      user: false,
      custom: null
    }
  };

  function saveUsers() {
    if ($scope.users.length>0) {
      localStorage.setItem('users', JSON.stringify($scope.users));
    } else {
      localStorage.setItem('users', '');
    }
  }

  function getUsers() {
    if (localStorage.users) {
      $scope.users = JSON.parse(localStorage.users);
    } else {
      $scope.users = [testUser];
    }
  }

  $scope.addUser = function() {
    $scope.users.push($scope.newUser);

    $scope.newUser = {
      name: null,
      roles: {
        admin: false,
        user: false,
        custom: null
      }
    };
  };

  $scope.deleteUser  = function(index) {
    $scope.users.splice(index, 1);
  };

  $scope.$watch('users', saveUsers, true);

  getUsers();
});
