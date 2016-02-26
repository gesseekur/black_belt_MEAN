module.exports = function(app) {
	var users = require('./../controllers/users.js')

	app.get('/users', function(req,res){
		users.index(req,res);
	});

	app.post('/users', function(req,res){
		users.create(req,res);
	});

	app.delete('/users/:id', function(req,res){
		// console.log(req.body);
		users.destroy(req,res);
	});

	app.patch('/users/:id', function(req,res){
		users.update(req,res);
	})

	// app.get('/orders', function(req,res){
	// 	orders.show(req,res);
	// });

	// app.post('/orders', function(req,res){
	// 	// console.log(req.body);
	// 	orders.add(req,res);
	// })

	// app.get('/products',function(req,res){
	// 	products.show(req,res);
	// })

	// app.post('/products',function(req,res){
	// 	products.add(req,res);
	// })

	// app.put('/products', function(req,res){
	// 	// console.log(req.body);
	// 	products.update(req,res);
	// })
};