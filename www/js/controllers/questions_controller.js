app.controller('QuestionsController', ['$scope', 'questionsService', function($scope, questionsService) {
  'use strict';

  var localQuestion;

  // Question counters.
  $scope.correctQuestions = 0;
  $scope.wrongQuestions = 0;
  $scope.totalQuestions = 0;
  $scope.totalTime;

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


  $scope.getNextQuestion = function() {
    localQuestion = questionsService.getQuestion();

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

  $scope.getNextQuestion();
}]);
