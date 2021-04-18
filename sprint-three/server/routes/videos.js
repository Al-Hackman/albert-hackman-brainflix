const express = require("express");
const app = express();
const videos = require("../data/videos.json");
// const cors = require("cors");
const uuid = require("uuid");
const path = require("path");
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
// const helpers = require('../helpers');

// app.use(express.static(__dirname + '/public'));

// const storage = multer.diskStorage({
//     // console.log('in storage')
//     destination: function(req, file, cb) {
//         console.log('destination', file, cb)
//         cb(null, 'videos/');
//     },

//     // By default, multer removes file extensions so let's add them back
//     filename: function(req, file, cb) {
//         console.log('filename', file, cb)
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });



// get all videos
router.get("/", (_req, res) => {
    res.status(200).send(videos);
});

// get video by id
router.get("/:id",( req, res) => {
    // console.log('req', req)
   const search = videos.find( v => v.id == req.params.id);
  if (search) {
    res.status(201).send(search);
  } else {
    res.status(400).json({
      error: 'Video not found'
    });
  }

});


// router.post("/", (req, res) => {
//     console.log('adding video', req)
//     let newVideo = {
//         id: uuid.v4(),
//         title: req.params.title,
//         channel: "req.params.channel",
//         image: req.params.image, //http://localhost:8080/images/Upload-video-preview.jpg
//         description: req.params.description,
//         views: "",
//         likes: "",
//         duration: "",
//         video: "https://project-2-api.herokuapp.com/stream",
//         timestamp: new Date().getTime(),
//         comments: []
//     };
//     videos.push(newVideo);
//     res.status(201).send(newVideo);
// });


router.post("/", (req, res) => {
    // console.log('adding video', req.body)

    // let upload = multer({ storage: storage, fileFilter: helpers.videoFilter }).single('video');
    // console.log("Upload file", upload)
    // upload(req, res, function(err) {
    //     // req.file contains information of uploaded file
    //     // req.body contains information of text fields, if there were any

    //     if (req.fileValidationError) {
    //         return res.send(req.fileValidationError);
    //     }
    //     else if (!req.file) {
    //         return res.send('Please select an video to upload');
    //     }
    //     else if (err instanceof multer.MulterError) {
    //         return res.send(err);
    //     }
    //     else if (err) {
    //         return res.send(err);
    //     }

    //     // Display uploaded video for user validation

    

    //     // res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
    // });
const {title, channel, image, description, views, likes, duration, video, timestamp, comments} = req.body;
    videos.push({
        id: uuid.v4(),
        title: title,
        channel: channel,
        image: "http://localhost:8080/images/Upload-video-preview.jpg",
        description: description,
        views: "",
        likes: "",
        duration: "",
        video: video,
        timestamp: new Date().getTime(),
        comments: []
    })
    fs.writeFileSync('data/videos.json',JSON.stringify(videos));
    res.json(videos)
    
});


module.exports = router;