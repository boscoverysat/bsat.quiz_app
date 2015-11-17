app.controller('QuestionsController', ['$scope', 'questionsService', function($scope, questionsService) {
  'use strict';

  $scope.checkAnswer = function(isCorrect) {
    if (isCorrect) {
      console.log('La respuesta es CORRECTA');
      $scope.increaseCorrectQuestions();
      $scope.resultMessage = "Enhorabuena !!!";
    } else {
      console.log('La respuesta es INCORRECTA');
      $scope.increaseWrongQuestions();
      $scope.resultMessage = "Inténtalo de nuevo.";
    }

    $scope.showAnswerButton = false;
    $scope.increaseTotalQuestions();
    $scope.showExplanation = true;
  };

  $scope.increaseCorrectQuestions = function() {
    $scope.correctQuestions++;
    // TODO: Guardar en BBDD.
  };

  $scope.increaseWrongQuestions = function() {
    $scope.wrongQuestions++;
    // TODO: Guardar en BBDD.
  };

  $scope.increaseTotalQuestions = function() {
    $scope.totalQuestions++;
    // TODO: Guardar en BBDD.
  };

  $scope.getCorrectQuestions = function() {
    // TODO: Obtener candidad desde BBDD.
    return 0;
  };

  $scope.getWrongQuestions = function() {
    return 0;
    // TODO: Obtener candidad desde BBDD.
  };

  $scope.getTotalQuestions = function() {
    return 0;
    // TODO: Obtener candidad desde BBDD.
  };

  $scope.getNextQuestion = function() {
    var localQuestion = questionsService.getQuestion();

    $scope.showAnswerButton = true;
    $scope.showExplanation = false;
    $scope.resultMessage = "";

    $scope.question = localQuestion.question;
    $scope.explanation = localQuestion.explanation;

    var randomResult = (((Math.floor(Math.random() * 100)) % 2) === 0);

    $scope.answer1 = randomResult ? localQuestion.answer1 : localQuestion.answer2;
    $scope.answer2 = randomResult ? localQuestion.answer2 : localQuestion.answer1;
    $scope.answer1correct = randomResult;
    $scope.answer2correct = !randomResult;
  };

  $scope.$on('$ionicView.beforeEnter', function(event) {
    $scope.getNextQuestion();

    $scope.correctQuestions = $scope.getCorrectQuestions();
    $scope.wrongQuestions = $scope.getWrongQuestions();
    $scope.totalQuestions = $scope.getTotalQuestions();
  });
}]);
