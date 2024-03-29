const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const port = process.env.PROT || 4000
const initDbConnection = require('./db/init');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/product/', productRoutes);

initDbConnection()
.then((data)=>{
	console.log("database connection established")
	app.listen(port, ()=>{
		console.log("Server running on port 3000")
	})
})

