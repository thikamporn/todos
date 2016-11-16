angular.module('todoApp',[])
.service('todoService',function()
      {
            var data = this

                data.todo =
                [
                  {title: 'Chalita',done: true },
                  { title: 'Thikamporn',done: false}
                ];

                data.list = function()
                  {
                      return data.todo
                  }
                data.add = function(todo)
                  {
                      data.todo.push(todo)
                  }
                data.update = function(ddone)
                  {
                      if(ddone.done === true)
                      {
                        ddone.done = false
                      }
                      else
                      {
                        ddone.done = true
                      }
                  }
      })

  .controller('ListData', function ($scope,todoService)
       {
        $scope.todo = todoService.list()

       })
  .controller('AddData', function ($scope,todoService)
        {
            $scope.title = ' '
              $scope.add = function ()
                  {
                     var tType =
                     {
                        title: $scope.title,
                        done: $scope.done
                     }
                     if(tType.title !== ' ')
                     {
                       todoService.add(tType)
                       resetData()
                     }
                  }
            function resetData()
                  {
                      $scope.title = ' '
                      $scope.done = false
                  }
        })
    .controller('UpdateDone',function($scope,todoService)
        {
          $scope.update = function (ddone)
          {
            todoService.update(ddone)
          }
        })
