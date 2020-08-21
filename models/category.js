var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var category = Schema({
    name:{
        type:String
    },
    photoUrl:{
        type:String
    }
},{
   timestamp:true,
})

module.exports = mongoose.model("categories",category);