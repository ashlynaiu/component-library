"use strict";angular.module("componentLibrary",["ngAnimate","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){c.html5Mode(!0),b.otherwise("/"),a.state("frame",{"abstract":!0,url:"/",templateUrl:"views/frame.html"}).state("navigation",{"abstract":!0,parent:"frame",templateUrl:"views/navigation.html"}).state("home",{url:"",parent:"frame",templateUrl:"views/main.html",controller:"MainCtrl"}).state("router",{url:"",parent:"frame",templateUrl:"views/ui-router.html"})}]).run(["$rootScope",function(a){a.$on("$stateChangeSuccess",function(){document.body.scrollTop=document.documentElement.scrollTop=0})}]),angular.module("componentLibrary").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);