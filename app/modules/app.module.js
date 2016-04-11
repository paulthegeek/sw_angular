(function() {
  "use strict"

  require("angular");
  require("./app_require.js");

  angular
    .module("app", ["app.people", "ui.router"])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/people");

    $stateProvider
      .state("people", {
        url: "/people",
        templateUrl: "modules/people/people_index.html",
        controller: "PeopleController",
        controllerAs: "peopleCtrl"
      });
  }
})();
