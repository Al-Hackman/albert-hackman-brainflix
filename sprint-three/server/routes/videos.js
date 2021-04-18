const express = require("express");
const app = express();
const videos = require("../data/videos.json");
// const cors = require("cors");
const uuid = require("uuid");
const path = require("path");
const router = express.Router();
const fs = require('fs');


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
    const {title, channel, image, description, views, likes, duration, video, timestamp, comments} = req.body;
    videos.push({
        id: uuid.v4(),
        title: title,
        channel: "req.params.channel",
        image: req.params.image, //http://localhost:8080/images/Upload-video-preview.jpg
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