let fs = require('fs');
let http = require('http');
let server = http.createServer(function (req, res) {
    //파일을 읽어 응답스트림과 pipe로 연결
    let instream = fs.createReadStream('./output.txt');
    instream.pipe(res);
});
server.listen(7001, '127.0.0.1')