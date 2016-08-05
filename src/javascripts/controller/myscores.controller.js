app.controller('MyScoresController', ['$scope', 'accessFac', MyScoresController]);

function MyScoresController($scope, accessFac) {
    $scope.myscores = [];
    $scope.username = accessFac.getuser();

    var ref = new Firebase("https://flickering-inferno-6917.firebaseio.com/scores");
    ref.orderByChild("user").equalTo($scope.username).on("child_added", function (score) {
        console.log('score', score.val());
        $scope.myscores.push(score.val());
    });

};



