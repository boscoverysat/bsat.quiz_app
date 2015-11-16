app.controller('QuestionsController', ['$scope', 'questionsService', function($scope, questionsService) {
  'use strict';

  var localQuestion;

  $scope.checkAnswer = function(isCorrect) {
    if (isCorrect) {
      console.log('La respuesta es CORRECTA');
      // TODO: Incrementar el contador de preguntas acertadas.
      $scope.resultMessage = "Enhorabuena !!!";
    } else {
      console.log('La respuesta es INCORRECTA');
      // TODO: Incrementar el contador de preguntas erradas.
      $scope.resultMessage = "Inténtalo de nuevo.";
    }

    $scope.showAnswerButton = false;
    // TODO: Incrementar el contador de preguntas realizadas.
    $scope.showExplanation = true;
  };

  $scope.getNextQuestion = function() {
    localQuestion = questionsService.getQuestion();

    $scope.showAnswerButton = true;
    $scope.showExplanation = false;
    $scope.resultMessage = "";

    $scope.question = localQuestion.question;
    $scope.answer1 = localQuestion.answer1.answer;
    $scope.answer2 = localQuestion.answer2.answer;
    $scope.explanation = localQuestion.explanation;

    // TODO: Determinar mediante random, cuál será la 1ª y cuál la 2ª.
    $scope.answer1correct = localQuestion.answer1.correct;
    $scope.answer2correct = localQuestion.answer2.correct;

  };

  $scope.getNextQuestion();
}]);
