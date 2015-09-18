var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.data = [
      {"name":"ABC","value":"abc"},
      {"name":"ABC","value":"abc"},
      {"name":"ABC","value":"abc"},
      {"name":"ABC","value":"abc"}
    ];
    
    $scope.reset = function(val){
      if(val == "f1")
        {
          $scope.f2 = null;
          $scope.f3 = null;
        }
        else if(val == "f2")
        {
           $scope.f1 = null;
           $scope.f3 = null;
        }
        else{
           $scope.f1 = null;
           $scope.f2 = null;
        }
    };
});
