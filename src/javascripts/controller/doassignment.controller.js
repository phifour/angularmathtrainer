app.controller('DoAssignmentController', ['$scope', '$firebaseArray', '$location', 'accessFac', DoAssignmentController]);

function DoAssignmentController($scope, $firebaseArray, $location, accessFac) {

    $scope.mysolution = {};

    $scope.username = accessFac.getuser();

    var ref = new Firebase('https://flickering-inferno-6917.firebaseio.com/assignments');

    $scope.myassignments = $firebaseArray(ref);

    $scope.submitassignment = function (assignmentID, mysolution) {

        var assignment = $scope.myassignments.$getRecord(assignmentID);

        var userscore = {assignmentID:assignmentID,user:$scope.username,problemscore:[]};


        console.log('loaded assignment', assignment);
        var problems = assignment['problems'];

        for (var i = 0; i < problems.length; i++) {
            var problem = problems[i];

            console.log('problem', problem);

            var possible_solutions = problem['solutions']

            var right_answer = true;

            for (var j = 0; j < possible_solutions.length; j++) {
                console.log('possible_solutions', j, possible_solutions[j]);
                var key = 'problem' + i + 'solution' + j;
                if (possible_solutions[j].rightanswer != mysolution[key].rightanswer) {
                    right_answer = false;
                }
            }
            
            if (right_answer){
                userscore.problemscore.push(problem.points);
            }else{
               userscore.problemscore.push(0);
            }

            //console.log('right_answer', right_answer);

        }

        console.log('problem', $scope.myassignments.$getRecord(assignmentID));
        console.log('mysolution', mysolution);

        var tempref = new Firebase('https://flickering-inferno-6917.firebaseio.com/scores/');
        tempref.push(userscore);
        
        //evaluate score       
        //  $location.path('/home');   
    }

};