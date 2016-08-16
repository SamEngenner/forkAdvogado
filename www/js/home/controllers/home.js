
(function () {
  'use strict';

  homeController.$inject = ['usuarioFactory'];
  angular.module('app.home').controller('homeController', homeController);



  function homeController(usuarioService) {
    var vm = this;
    vm.add = adicionar;
   
console.log('as');
    function adicionar(d) {

      usuarioService.create(d);
      console.log('add');
    }

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
         console.log(user);
        vm.perfil = user;

      } else {
        return false;
      }
    });



  }



} ());