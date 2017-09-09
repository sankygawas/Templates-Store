'use strict';

// Declare app level module which depends on views, and components
angular.module('templatesStore.templates', ['ngRoute'])
.config(function($locationProvider,$routeProvider){
      $locationProvider.hashPrefix('!');
    $routeProvider
    .when('/templates',{
        templateUrl : 'templates/templates.html',
        controller : 'TemplatesController'
    })
    .when('/templates/:templateId',{
        templateUrl : 'templates/template-detail.html',
        controller : 'TemplateDetailController'
    })
  
  
})

.controller('TemplatesController',function($scope,$http){
    $http.get("json/templates.json").success(function(data){
      $scope.templates = data;
        console.log(data);
    });;
    
    
})

.controller('TemplateDetailController',function($scope,$http,$routeParams,$filter){
    var templateId = $routeParams.templateId;
     $http.get("json/templates.json").success(function(data){
        $scope.template = $filter('filter')(data,function(data){
            return data.id == templateId;
        })[0];    
     
    });
})