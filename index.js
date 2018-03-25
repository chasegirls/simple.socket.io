var app = require("express")()
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
io.on('connection', function(socket) {
    console.log("绑定连接时间，连接后执行这个回调");
    socket.on("chat message", function(msg) {
        io.emit("message", msg)
    })
    socket.on('disconnect', function() {
        console.log('断开连接');
    });

})
http.listen(3000, function() {
    console.log('listening on * :3000')
})