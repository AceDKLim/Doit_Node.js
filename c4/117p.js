let fs = require('fs');
//동기식으로 파일 호출
var data = fs.readFileSync('C:\\Users\\elevn\\Desktop\\2-2\\Doit_Node.js\\package.json', 'utf8');
console.log(data);