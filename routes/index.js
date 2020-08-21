var express = require('express');
var router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
var posts = require('../models/posts');
var popular = require('../models/popular');
var categories = require('../models/category');


const s3 = new AWS.S3({
    accessKeyId: "AKIAJGCPCLLROU23KWAQ",
    secretAccessKey: "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",
});

const uploads3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'blogg424',
        acl:'public-read',
        key: (req, file, cb) => {
            // console.log(file);
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
});

router.route('/')
.get((req,res,next)=>{
  res.render('index',{title:'Blogging'})
})

router.route('/upload')
.post(uploads3.single('x'),(req,res,next)=>{
  res.send(req.file)
})

router.route('/posts')
.get((req, res, next)=> {
  posts.find({})
  .then((posts)=>{
    res.send(posts)
  })
})
.post((req,res,next)=>{
  posts.create({html:req.body.html,title:req.body.title,cover:req.body.cover,author:req.body.author,tags:req.body.tags,description:req.body.description,category:req.body.category})
  .then((post)=>{
    res.json({"reply":"success"})
  })
})

router.route('/recent-posts')
.get((req,res,next)=>{
  posts.find().sort({ _id: -1 }).limit(3)
  .then((posts)=>{
    res.send(posts)
  })
})

router.route('/single-blog/:id')
.get((req,res,next)=>{
  posts.findById(req.params.id)
  .then((post)=>{
    res.json(post)
  })
})

router.route('/allcategory')
.get((req,res,next)=>{
  categories.find({})
  .then((category)=>{
    res.send(category);
  })
})
.post((req,res,next)=>{
  categories.create({name:req.body.name,photoUrl:req.body.photoUrl})
  .then((category)=>{
    res.json({"reply":"success"})
  })
})
router.route('/categoryUpload')
.post(uploads3.single('categoryPhoto'),(req,res,next)=>{
  res.send(req.file)
})

router.route('/category')
.get((req,res,next)=>{
  posts.find({category:req.query.name})
  .then((posts)=>{
    res.send(posts);
  })
})

router.route('/popular')
.get((req,res,next)=>{
  posts.find({popular:true}).sort({ _id: -1 }).limit(3)
  .then((posts)=>{
    res.send(posts);
  })
})
.post((req,res,next)=>{
  posts.findByIdAndUpdate(req.body.id,{$set:{popular:!req.body.popular}})
  .then((popular)=>{
    res.json({"reply":"success"})
  })
})

router.route('/relatedPost')
.post((req,res,next)=>{
  posts.find({category:req.body.category}).sort({ _id: -1 }).limit(2)
  .then((posts)=>{
    res.send(posts)
  })
})

module.exports = router;
