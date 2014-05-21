'use strict';

angular.module('homeForRentApp2')

    .controller('NavController', ['$scope', '$location',
        function ($scope, $location) {

            $scope.IsActive = function (viewLocation) {
                return viewLocation === $location.path();
            };

        }
    ])


    .controller('MainCtrl', function ($scope) {

        $scope.activeTab = 0;
        $scope.tabs = [
            {
                title: "The House",
                template: "views/tabs/house.html",
                url: "/",
                ref: "#house"
            },
            {
                title: "Rates",
                template: "views/tabs/rates.html",
                url: "/rates",
                ref: "#rates"
            },
//            {
//                title : "Availability",
//                template: "views/tabs/availability.html",
//                ref: "#availabilty"
//            },
            {
                title: "Near By",
                template: "views/tabs/nearby.html",
                url: "/nearby",
                ref: "#nearby"
            },
            {
                title: "Travel",
                template: "views/tabs/directions.html",
                url: "/travel",
                ref: "#travel"
            },
            {
                title: "Gallery",
                template: "views/tabs/gallery.html",
                url: "/gallery",
                ref: "#gallery"
            },
            {
                title: "Contact",
                template: "views/tabs/contact.html",
                url: "/contact",
                ref: "#contact"
            }
        ];


        $scope.calculateRate = function (r) {
            return Math.ceil(r * $scope.selectedCurrency.fx);
            // return r; ///return 123; //return Math.floor (r * $scope.selectedCurrency.rate);
        }


    })
    .controller('RatesController', function ($scope) {

    $scope.rates = {
        currencies: [
            {
                name: "Pound Sterling (£)",
                symbol: "GBP",
                fx: 0.86
            },
            {
                name: "US Dollar ($)",
                symbol: "USD",
                fx: 1.6
            },
            {
                name: "Euro (€)",
                symbol: "EUR",
                fx: 1.0
            }
        ],
        periods: [

            {
                period: "January - March",
                rate: 250
            },
            {
                period: "April",
                rate: 300
            },
            {
                period: "May",
                rate: 350
            },
            {
                period: "June",
                rate: 450
            },
            {
                period: "July - August",
                rate: 600
            },
            {
                period: "September",
                rate: 400
            },
            {
                period: "October - December",
                rate: 250
            }
        ]};

    $scope.selectedCurrency = $scope.rates.currencies[2];


});
