let fs = require('fs');

//파일에 데이터 씀
fs.open('./output.txt', 'r', function (err, fd) {
    if (err) throw err;
    let buf = Buffer.alloc(30);
    console.log('퍼퍼 타입 : %s', Buffer.isBuffer(buf));
    fs.read(fd, buf, 0, buf.length, null, function (err, bytesRead, buffer) {
        if (err) throw err;
        let inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('파일에서 읽은 데이터 : %s', inStr);
        console.log(err, bytesRead, buffer);
        fs.close(fd, function () {
            console.log('output.txt 열고 읽기 완료');
        });
    });
});
