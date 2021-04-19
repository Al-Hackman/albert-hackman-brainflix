const express = require("express");
const videos = require("../data/videos.json");
const uuid = require("uuid");
const router = express.Router();
const fs = require('fs');


// get all videos
router.get("/", (_req, res) => {
    res.status(200).send(videos);
});

// get video by id
router.get("/:id",( req, res) => {
    const search = videos.find( v => v.id == req.params.id);
    if (search) {
        res.status(201).send(search);
    } else {
    res.status(400).json({
      error: 'Video not found'
    });
    }
});


router.post("/", (req, res) => {   
    const {title, channel, description, video} = req.body;
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