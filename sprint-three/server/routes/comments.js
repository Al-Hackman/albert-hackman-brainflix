// const express = require("express");
// const app = express();
// const videos = require("../data/videos.json");
// // const cors = require("cors");
// const uuid = require("uuid");
// const path = require("path");
// const multer = require('multer');
// const router = express.Router();
// const fs = require('fs');
// const upload = require('express-fileupload');




// router.post("/:id/Comments", (req, res) => {
        
// const {comment} = req.body;
// let id = req.params.id;
// let commentVideo = videos.find(vid => vid.id === id);
// commentVideo.comments.push({
//         id: uuid.v4(),
//         comments: comment,
//         name: "Albert Hackman",
//         timestamp: new Date().getTime(),
//         likes: 0,
//     })
    
//     fs.writeFileSync('data/videos.json',JSON.stringify(videos));
//     res.json(req.body)
    
// });

// // router.use('/:id/Comments',comment)
// module.exports = router;