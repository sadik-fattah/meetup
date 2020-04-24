const EXPRESS = require("express");
const app = new EXPRESS();

// Static content base Directory
app.use(EXPRESS.static("public"));

/*
Start the server on the specified port
*/
var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Server Running at  http://%s:%s", host, port)
})


/*
Send the landing html page to user 
*/
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
});