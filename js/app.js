var app = angular.module('ionicApp', ['ionic']);
//For Android Emulator
//var baseAddress = "http://10.0.2.2/api/";
//var baseAddress = 'http://localhost:56853/';
var baseAddress = 'http://app.dotnettricks.io/';

var serviceUrl = "";

app.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom'); //other values: top
}]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('auth', {
            url: "/auth",
            abstract: true,
            templateUrl: "templates/auth.html"
        })
        .state('auth.signin', {
            url: '/signin',
            cache: false,
            views: {
                'signin': {
                    templateUrl: 'templates/signin.html',
                    controller: 'SignInCtrl'
                }
            }
        })
        .state('auth.signup', {
            url: '/signup',
            cache: false,
            views: {
                'signup': {
                    templateUrl: 'templates/signup.html',
                    controller: 'SignUpCtrl'
                }
            }
        })
        .state('tabs', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        }).state('tabs.dashboard', {
            url: '/dashboard',
            views: {
                'dashboard-tab': {
                    templateUrl: 'templates/dashboard.html',
                    controller: 'DashboardCtrl'
                }
            }
        }).state('tabs.customers', {
            url: '/customers',
            cache: false, //required
            views: {
                'customers-tab': {
                    templateUrl: 'templates/customers.html',
                    controller: 'CustomerCtrl'
                }
            }
        }).state('tabs.addcustomer', {
            url: '/addcustomer',
             cache: false, //required
            views: {
                'customers-tab': {
                    templateUrl: 'templates/add-customer.html',
                    controller: 'addCustomerCtrl'
                }
            }
        }).state('tabs.editcustomer', {
            cache: false, //required
            url: '/editcustomer/:customerId',
            views: {
                'customers-tab': {
                    templateUrl: 'templates/add-customer.html',
                    controller: 'editCustomerCtrl'
                }
            }
        }).state('tabs.viewcustomer', {
            cache: false, //required
            url: '/viewcustomer/:customerId',
            views: {
                'customers-tab': {
                    templateUrl: 'templates/customer.html',
                    controller: 'viewCustomerCtrl'
                }
            }
        });
    //default page
    $urlRouterProvider.otherwise('/auth/signin');
});





