var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('<insert-mongo-url>', {
	useNewUrlParser: true
}, (callback)=>{
    console.log("Connected to MongoDB");
});

module.exports={mongoose};
