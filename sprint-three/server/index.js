const express = require("express");
const app = express();
const videos = require("./data/videos.json");
const cors = require("cors");
const uuid = require("uuid");
const path = require("path");
const videosRoutes = require('./routes/videos');


app.use(express.json());
app.use(cors());
app.use("/images",express.static(path.resolve('./public/images')));
app.use((req, _res, next) => {
    console.log(
        `The path at ${
            req.path
        } was targeted at ${new Date().toLocaleDateString()}`
    );
    next();
});


// routes
app.use('/videos', videosRoutes);


// // get all videos
// app.get("/videos", (_req, res) => {
//     res.status(200).send(videos);
// });

// // get video by id
// app.get("/videos/:id",( req, res) => {
//     console.log('req', req)
//    const search = videos.filter( v => v.id == req.params.id);
//   if (search) {
//     res.status(200).json(search);
//   } else {
//     res.status(400).json({
//       error: 'Video not found'
//     });
//   }

// });


// app.post("/video", (req, res) => {
//     let newVideo = {
//         id: uuid.v4(),
//         title: req.params.title,
//         channel: req.params.channel,
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





app.listen(8080, (error) =>
    error ? console.error(error) : console.info("Ready to go!")
);