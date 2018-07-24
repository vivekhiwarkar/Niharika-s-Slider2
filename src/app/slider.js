angular.module('myapp')
  .controller('Control', ['$http', function ($http) {

     $http({
         method : 'GET',
         url : '~/myapp/src/asset/birds.json '
         
    })
   }]
  );