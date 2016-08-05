 
app.controller('AddEventController', ['$scope', 'CheckValuesService','FourSquareService','$q','$location','refFac','accessFac','$firebaseArray', AddEventController]);

function AddEventController($scope, CheckValuesService, FourSquareService,$q,$location,refFac,accessFac,$firebaseArray) {  
    
    $scope.username = accessFac.getuser();

    $scope.authData = undefined;
    
    $scope.expression = "\\frac{5}{4} \\div \\frac{1}{6}";

    $scope.assignments = [{name:'test1',eqn:"E= m c^2"},{name:'test2',eqn:"\\Delta \\phi = - 4 \\pi \\rho"}];
       
    //sorting options
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term
    $scope.reverseSort = false;
    $scope.charts = ['chart1','chart2','chart3'];
            
    $scope.testarray = undefined;
    
    for (var i = 0; i < $scope.charts.length; i++) {
        var divname = '#'+ $scope.charts[i];
        console.log('divname',divname);
        functionPlot({
            target: divname,
            data: [{
                points: [
                    [1, 1],
                    [2, 1],
                    [2, 2],
                    [1, 2],
                    [1, 1]
                ],
                fnType: 'points',
                graphType: 'polyline'
            }]
        })
    }

    // $scope.refratings.$loaded().then(function (x) {
    //     $scope.testarray = x;        
    // })
    //  .catch(function (error) {
    //         console.log("Error:", error);
    //  });
           
    // $scope.$watch('restauranttype',
    //     function (newValue, oldValue) {
    //         console.log('restauranttype', $scope.restauranttype);
    //         getfoursquare($scope.restauranttype, $scope.foursquarecity);
    //     }
    //     );

    // $scope.$watch('foursquarecity',
    //     function (newValue, oldValue) {
    //         console.log('foursquarecity', $scope.foursquarecity);
    //         getfoursquare($scope.restauranttype, $scope.foursquarecity);
    //     }
    //     );
    
    
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ]; 
    
}