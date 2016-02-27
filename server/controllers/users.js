var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		create: function(req,res){
			console.log("requesting a username", req.body.name)
			User.findOne({name: req.body.name }, function(err,user){
				if(!user){
					var newUser = new User(req.body);
					newUser.save(function(err){
						if(err) {
							console.log(err);
							res.json({err:err, user: null});
						}
						else{
						res.json({err:null, user: newUser});
						}
					})
				}
				else {
					res.json({err:null, user:user});
				}
			});			
		}
		// destroy: function(req,res){
		// 	console.log("Server/Ctrl/Users-Destory ")
		// 	console.log("Destroy params id", req.params.id);
		// 	User.remove({_id:req.params.id}, function(err){
		// 		if(err){
		// 			console.log(err);
		// 			res.json({status:"false"});
		// 	 	}	
		// 	 	else{ 
		// 	 		res.json({status:"true"});
		// 	 	} 
		// 	})
		// }
	}
})();  