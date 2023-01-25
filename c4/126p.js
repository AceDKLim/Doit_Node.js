let fs = require('fs');

let inname = './output.txt'
let outname = './output2.txt'

Exist = fs.existsSync(outname);

if (Exist) {
    fs.unlink(outname, function (err) {
        if (err) throw err;
        console.log('기존 파일[' + outname + ']삭제함');
    });
}
let infile = fs.createReadStream(inname, { flags: 'r' });
let outfile = fs.createWriteStream(outname, { flags: 'w' });
infile.pipe(outfile);
console.log('파일 복사 [' + inname + '] -> [' + outname + ']');
