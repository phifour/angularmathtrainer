app.controller('NewAssignmentController', ['$scope', '$location', 'accessFac', NewAssignmentController]);

function NewAssignmentController($scope, $location, accessFac) {
    $scope.problems = [];

    $scope.problem = {solutions:[]};

    $scope.submitpossiblesulution = function (solution) {        
        var temp = {};
        angular.copy(solution, temp);
        $scope.problem.solutions.push(temp);
    }

    $scope.submitproblem = function (problem) {
        //problem['name'] = $scope.problems.length;
        
        if ($scope.problem.solutions.length > 1 && $scope.problem.points != undefined) {
            var temp = {};
            angular.copy(problem, temp);
            $scope.problems.push(temp);
            problem = {};
            $scope.problem = { solutions: [] };

        } else {
            alert("Your problem requires at least two possible solutions");
        }        
        

    }
    
    $scope.remove = function (list,element) {
        var index =  list.indexOf(element);
        if (index > -1) {
            list.splice(index, 1);
        }
    };
    
    $scope.submitassignment = function (myrating, eqn) {
        var obj = { user: $scope.username, problems: $scope.problems };
        console.log('check submit',obj);
        var json = angular.toJson( obj );
        console.log('json',json);
        console.log('final test',JSON.parse(json));
        var tempref = new Firebase('https://flickering-inferno-6917.firebaseio.com/assignments/');
        
        tempref.push(JSON.parse(json));
        $location.path('/home');
    }

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
        { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
        { stateOn: 'glyphicon-heart' },
        { stateOff: 'glyphicon-off' }
    ];
}

