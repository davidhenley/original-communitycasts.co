(function() {
	'use strict';

 var app = angular
 	 .module('communityCasts', [
			'config',
			'ui.router',
			'smoothScroll',
			'ngMaterial',
			'ngMessages',
			'angulartics',
			'angulartics.google.analytics',
			'ui.router.title',
			'ngResource',
			'youtube-embed'
		]);
	app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
      $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
      $locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('screencast', {
				url: '/screencast/:screencastId',
				templateUrl: '/app/components/screencast/_screencast.html',
			  controller: 'screencastController',
			});
			$stateProvider.state('submit', {
				url: '/submit',
				templateUrl: '/app/components/submit/_submit.html',
				controller: 'submitController',
				resolve: {
	      $title: function() { return 'Submit'; }
	    }
			});
			$stateProvider.state('tagged', {
				url: '/tagged/:tagged',
				templateUrl: '/app/components/screencasts/_screencasts.html',
				controller: 'screencastsController',
				params: {
					sort: 'popular',
					tagged: '',
				},
				resolve: {
					$title: ['$stateParams', function ($stateParams) {
						return $stateParams.tagged  + ' Screencasts';
					}]
				}
			});
			$stateProvider.state('home', {
				url: '/',
				templateUrl: '/app/components/screencasts/_screencasts.html',
				controller: 'screencastsController',
				params: {
					sort: 'popular',
					tagged: '',
				}
			});
		}
	]);
})();
