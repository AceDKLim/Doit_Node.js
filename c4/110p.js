let url = require('url');

//주소 문자열 -> URL 객체
let curURL = url.parse('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=node.js&oquery=%EB%85%B8%EB%93%9C&tqi=h8Wr3lp0JXVss6AqflCssssssz8-033315');

//URL 객체 -> 주소 문자열
let curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.log(curURL);