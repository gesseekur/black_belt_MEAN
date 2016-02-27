app.factory('surveyFactory', function($http){
	return {
		createSurvey:function(newSurvey,callback){
			$http.post('/survey', newSurvey).then(function(response){
				if(response.data.err){
					callback(response.data.err)
				}
				else {
					user = response.data.user;
					callback(null);
				}
			})
		},

		listAll: function(callback){
			$http.get('/surveys').then(callback);
		},

		deleteSurvey: function(id, callback){
			$http.delete('/survey/'+id).then(callback);
		},

		readSurvey:function(id,callback){
			$http.get('/survey/'+id).then(callback);
		},

		updateOption1Vote: function(id, callback){
			$http.patch('/survey/option1/'+id).then(callback);
		},
		updateOption2Vote: function(id, callback){
			$http.patch('/survey/option2/'+id).then(callback);
		},
		updateOption3Vote: function(id, callback){
			$http.patch('/survey/option3/'+id).then(callback);
		},
		updateOption4Vote: function(id, callback){
			$http.patch('/survey/option4/'+id).then(callback);
		},
	}
})