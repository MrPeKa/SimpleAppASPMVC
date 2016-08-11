var myApp = angular.module("myApp", []);

myApp.controller("CalucatorController", function ($scope, $http) {

    //declaration
    var sign = $scope.sign = "";
    var resultHistory = $scope.resultHistory = " ";
    var currentValue = $scope.currentValue = 0;
    var currentResult = 0;
    var operation = "";
    var theSameValue = false;

    //adding next digit to the number
    $scope.onDigit = function (digit) {
        if (currentValue === currentResult) {
            currentValue = 0;
            theSameValue = false;
        }
        currentValue = currentValue * 10 + digit;
        updateScopes();
    }

    //removing digit from the end of the number
    $scope.onBackspace = function() {
        currentValue = parseInt(currentValue / 10);
        updateScopes();
    }

    //clear whole memory
    $scope.onClear = function () {
        restartView();
        currentValue = 0;
        currentResult = 0;
        $scope.showWarning = false;
        updateScopes();
    }

    //clear current value
    $scope.onClearEnter = function () {
        currentValue = 0;
        theSameValue = false;
        updateScopes();
    }

    //equaling
    $scope.onEquals = function () {
        sendData();
        updateScopes();
        restartView();
    }

    //changing sign or equaling
    $scope.onSign = function (oper, flag) {

        if (sign === "" && currentValue === 0)
            resultHistory = 0 + " ";

        else if(!theSameValue){
                if (sign === "") {
                    resultHistory = currentValue + " ";
                    theSameValue = true;
                    currentResult = currentValue;
                } else {
                    resultHistory = resultHistory + sign + " " + currentValue + " ";
                    sendData();
                    theSameValue = true;
                }

        }
            sign = flag;
            operation = oper;
            updateScopes();
    }

    //update scopes in view
    function updateScopes() {
        if (!$scope.showWarning) {
            $scope.currentValue = currentValue;
            $scope.resultHistory = resultHistory;
            $scope.sign = sign;
        }
    }

    //restart of the variables
    function restartView() {
        resultHistory = "";
        sign = "";
        operation = "";
        theSameValue = false;
    }

    //posting data to HomeController/Calculator and receivng output
    //also fuction does some validation of data
    function sendData() {
        if (!$scope.showWarning) {
            var dataToSend = {
                X: currentResult,
                Y: currentValue,
                Type: operation
            }

            var request = {
                method: 'POST',
                url: '/Home/Calculator/',
                data: dataToSend,
                headers: { "Content-Type": "application/json" }
            };

            if (validation()) {
                executeWarning();
            } else {
                $scope.showWarning = false;
                $http(request)
                    .success(function(result) {
                        currentValue = result;
                        currentResult = result;
                        updateScopes();
                    })
                    .error(function() {
                    });
            }

        }

        function validation() {
            return (currentValue === 0 && operation === "Divsion");
        }

        function executeWarning() {
            $scope.showWarning = true;
        }
    }

});


    