(function() {
  "use strict";

  angular
    .module("app.people")
    .controller("PeopleController", PeopleController);

  PeopleController.$inject = ["$http"];

  function PeopleController($http) {
    var peopleCtrl = this;
    peopleCtrl.superman = "Superman";
    $http({
      method: "GET",
      url: "http://swapi.co/api/people/"
    }).then(function success(response) {
      peopleCtrl.peoples = response.data.results;
      return peopleCtrl.peoples;
    }, function error(response) {
      console.log("Error");
    });
  }
})();
