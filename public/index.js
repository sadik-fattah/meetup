let VIDEO_STREAM_CONSTANT = { video: true };

function getVideoStream() {
    navigator.getUserMedia(VIDEO_STREAM_CONSTANT, onstreamProvided, onstreamError);
}

function onstreamProvided(stream) {
    console.log("stream provided");
    let video_object = document.querySelector("#user_video");
    video_object.srcObject = stream;
}


function onstreamError(err) {
    console.error("Stream Error", err);
}


getVideoStream();