app.factory("userFactory", function($http){
	var user ={};
	user.name = "";
	return {
		getName:function(callback){
			callback(user);
		},

		setName:function(input,callback){
			console.log('userFactory, setName',input);
			$http.post("/users",input).then(function(response){
				if(response.data.err){
					callback(response.data.err)
				}
				else {
					user = response.data.user;
					callback(null);
				}
			});
		}
	}
})

