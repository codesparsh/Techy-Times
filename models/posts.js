var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var posts = Schema({
    html:{
        type:String
    },
    title:{
        type:String
    },
    cover:{
        type:String
    },
    author:{
        type:String
    },
    tags:{
        type:Array
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    popular:{
        type:Boolean
    }

},{timestamps: true})

module.exports = mongoose.model("posts",posts);