const express = require("express");
const app = express();
const videos = require("../data/videos.json");
// const cors = require("cors");
const uuid = require("uuid");
const path = require("path");
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const upload = require('express-fileupload');




router.post("/", (req, res) => {
        
const {comments} = req.body;
    videos.comments.unshift({
        comments: comments,
    })
    
    fs.writeFileSync('data/videos.json',JSON.stringify(videos.comments));
    res.json(videos.comments)
    
});


module.exports = router;