// webpack.config 파일을 보면, entry가 main.js 파일이니까,
// main.js파일을 시작점으로 하면 css파일 또한 import를 통해서 읽게 되고
// main.js파일은 index.html 파일에 연결되어 있으니 최종적으로는 main.js + main.css -> index.html
// 해서 dist폴더로 build 해주는 것
import '../scss/main.scss';

// 이 때 문제점은, webpack은 css파일을 읽을 수는 없고 css파일을 합쳐서 dist로 보내주는 역할만 가능하다
// 따라서 추가적인 패키지가 필요함 -> css-loader와 style-loader

console.log('webpack');
