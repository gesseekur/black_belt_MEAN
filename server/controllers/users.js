var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		index: function(req,res) {
			console.log("Server / Ctrl /Users - Index")
			 User.find({}, function(err, users){
			 	if(err){
			 		res.json([{first_name:"Updating, please be patient...."}]);
			 	}
			 	else{ 
			 		res.json(users);
			 	}
			}) 
		},
		create: function(req,res){
			console.log("Server / Ctrl / Users - Create")
			console.log("Post Data:", req.body);
			var user = new User;
			user.first_name= req.body.first_name;
			user.save(function(err){
				if(err){
					console.log(err);
					res.json({status:"false"});
			 	}	
			 	else{ 
			 		res.json({status:"true"});
			 	} 
			})
		},
		destroy: function(req,res){
			console.log("Server/Ctrl/Users-Destory ")
			console.log("Destroy params id", req.params.id);
			User.remove({_id:req.params.id}, function(err){
				if(err){
					console.log(err);
					res.json({status:"false"});
			 	}	
			 	else{ 
			 		res.json({status:"true"});
			 	} 
			})
		}
	}
})();  