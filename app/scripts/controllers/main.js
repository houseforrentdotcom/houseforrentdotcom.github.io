'use strict';

angular.module('homeForRentApp')
  .controller('MainCtrl', function ($scope) {

        $scope.activeTab = 0;
        $scope.tabs = [
            {
                title : "The House",
                template: "views/tabs/house.html"
            },
            {
                title : "Rates",
                template: "views/tabs/rates.html"
            },
//            {
//                title : "Availability",
//                template: "views/tabs/availability.html"
//            },
            {
                title : "Near By",
                template: "views/tabs/nearby.html"
            },
            {
                title : "Travel",
                template: "views/tabs/directions.html"
            },
            {
                title : "Gallery",
                template: "views/tabs/gallery.html"
            },
            {
                title : "Contact",
                template: "views/tabs/contact.html"
            },
        ];


        $scope.rates = {
            currencies: [
                {
                    name : "Pound Sterling (£)",
                    symbol: "GBP",
                    fx: 0.86
                },
                {
                    name : "US Dollar ($)",
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

        $scope.calculateRate = function (r) {
            return Math.ceil(r * $scope.selectedCurrency.fx);
           // return r; ///return 123; //return Math.floor (r * $scope.selectedCurrency.rate);
        }




  });
