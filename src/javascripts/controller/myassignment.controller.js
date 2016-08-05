app.controller('MyAssignmentController', ['$scope',  MyAssignmentController]);

function MyAssignmentController($scope) {
        $scope.myassignments = {};
        var ref = new Firebase('https://flickering-inferno-6917.firebaseio.com/assignments');
        ref.orderByChild("user").on("child_added", function (assignment) {
            console.log('assignments',assignment.val()); 
            console.log('assignments key',assignment.key()); 
            $scope.myassignments[assignment.key()] = assignment.val();
        });
};