angular.module('todoApp',[])
.service('todoService',function()
      {
            var data = this

                data.todo = []

                data.list = function()
                  {
                      return data.todo
                  }
                data.add = function(nameType)
                  {
                      data.todo.push(nameType)
                  }

      })

  .controller('ListData', function ($scope,todoService)
       {
        $scope.todo = todoService.list()
       })
  .controller('AddData', function ($scope,todoService)
        {
              $scope.add = function ()
                  {
                     var nameType =
                     {
                        name: $scope.name
                     }
                       todoService.add(nameType)
                       resetData()
                  }
            function resetData()
                  {
                      $scope.name = ' '
                  }
        })
  .controller('C1', function($scope)
      {
          $scope.roles =
          {[ cb : 'Complete']}

      })
