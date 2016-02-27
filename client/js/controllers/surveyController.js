app.controller("surveyController", function($scope, userFactory, surveyFactory, $routeParams, $location){
	var id = $routeParams.id

	function readSurvey(){
		surveyFactory.readSurvey(id, function(response){
			console.log('readSurvey',response);
			$scope.survey =response.data;
			})
		}

	readSurvey();

	$scope.updateOption1Vote = function(id){
		surveyFactory.updateOption1Vote(id, function(response){
			readSurvey();
		})
	}
	$scope.updateOption2Vote = function(id){
		surveyFactory.updateOption2Vote(id, function(response){
			readSurvey();
		})
	}
	$scope.updateOption3Vote = function(id){
		surveyFactory.updateOption3Vote(id, function(response){
			readSurvey();
		})
	}
	$scope.updateOption4Vote = function(id){
		surveyFactory.updateOption4Vote(id, function(response){
			readSurvey();
		})
	}

})