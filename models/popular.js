var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Popular = Schema({
    postId:{type:Schema.Types.ObjectId,ref:"posts"}
},{timestamps: true}) 

module.exports = mongoose.model("popular",Popular)