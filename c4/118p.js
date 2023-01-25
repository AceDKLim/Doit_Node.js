let fs = require('fs');
//비동기식IO로 파일 호출
fs.readFile('C:\\Users\\elevn\\Desktop\\2-2\\Doit_Node.js\\package.json', 'utf8', function (err, data) {
    console.log(data);
});
console.log('package.json 파일을 읽도록 요청했습니다.');