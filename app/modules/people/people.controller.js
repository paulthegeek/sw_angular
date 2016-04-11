(function() {
  "use strict";

  angular
    .module("app.people", [])
    .controller("PeopleController", PeopleController);

  function PeopleController() {
    $http({
      method: "GET",
      url: "http://swapi.co/api/people"
    }).then(function success(response) {
      console.log(response);
    }, function error(response) {
      console.log("Error");
    }

  }
})();
