(function() {
  "use strict"

  require("angular");
  require('angular-ui-router');
  require("./app_require.js");

  angular
    .module("app", ["app.people", "ui.router"])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("people", {
        url: "/people",
        templateUrl: "modules/people/peoples.html",
        controller: "PeopleController",
        controllerAs: "peopleCtrl"
      });
  }
})();
