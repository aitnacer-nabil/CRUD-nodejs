var mongoose = require('mongoose');
var costumerSchema =  new mongoose.Schema({
	firstName:{
		type:String,
		required:[true,"Costumer should have a name"]
	},
	lastName:{
		type:String,
		required:[true,"Costumer should have a lastname"]
	},
	tel:{
		type:String,
		required:[true,"Costumer should have a tel number"]
	},
	email:{
		type:String,
		required:[true,"Costumer should have a name"]
	},
	details:{
		type:String,
		required:[true,"Costumer should have a name"]
	},
	createdAt:{
		type:Date,
		default: Date.now()
		
	},
	updateAt:{
		type:Date,
		default: Date.now()
		
	},
})

const Costumer = mongoose.model('costumer',costumerSchema);
module.exports = Costumer;


