const videoFilter = function(req, file, cb) {
    // Accept videos only
    if (!file.originalname.match(/\.(mp4)$/)) {
        req.fileValidationError = 'Only video files are allowed!';
        return cb(new Error('Only video files are allowed!'), false);
    }
    cb(null, true);
};
exports.videoFilter = videoFilter;