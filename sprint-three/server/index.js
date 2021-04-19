const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const videosRoutes = require('./routes/videos');
const sPort = 8080;


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


//declaring the port the app will be running/listening on
app.listen(sPort, (error) =>
    error ? console.error(error) : console.info("Ready to go!")
);