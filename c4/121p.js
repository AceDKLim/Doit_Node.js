let fs = require('fs');

//파일에 데이터 씀
fs.open('./output.txt', 'w', function (err, fd) {
    if (err) throw err;
    //buf라는 새로운 버퍼 객체에 '안녕'이라는 글씨 넣음 이유가 뭘까?그냥 변수에 넣으면 안됨?
    let buf = Buffer.from('안녕하세요!\n');
    fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
        if (err) throw err;
        console.log(err, written, buffer);
        fs.close(fd, function () {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        });
    });
});
