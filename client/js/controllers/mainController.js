app.controller("mainController", function($location, surveyFactory,userFactory,$route,$scope){
	$scope.currentUser={};

	userFactory.getName(function(data){
		if(!data.name){
			$location.url('/');
		}
		else{
			$scope.currentUser = data; 
		}
	})

	$scope.createSurvey = function(newSurvey, user){
		newSurvey.name = user.name;
		newSurvey.user_id = user;
		surveyFactory.createSurvey(newSurvey, function(err){
			if(err){
				$scope.error = err;
				console.log("createSurvye err",$scope.error);
			}
			else {
				$location.url('main');
			}
		})
		$scope.newSurvey={};
	}

	function getSurveys(){
		surveyFactory.listAll(function(response){
			$scope.surveys =response.data;
			console.log("getSurveys", $scope.surveys);
			})
		}
	getSurveys();

	$scope.deleteSurvey = function(id){
		surveyFactory.deleteSurvey(id,function(response){
			getSurveys();
		})
	}



})