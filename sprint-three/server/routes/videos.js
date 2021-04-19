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

//post video on the upload page
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
        comments: [
            {
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            "likes": 0,
            "timestamp": 1545162149000
        },
        {
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            "likes": 0,
            "timestamp": 1544595784046
        },
        {
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
            "likes": 0,
            "timestamp": 1542262984046
        }
        ]
    })
    
    fs.writeFileSync('data/videos.json',JSON.stringify(videos));
    res.json(videos)
    
});


module.exports = router;