// import * as htmlToImage from '/Users/sasajimarei/Desktop/EvaGenerate/node_modules/html-to-image';
// import { toSvg } from 'html-to-image';
// // let htmlToImage = require('html-to-image');
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#download-btn").onclick = function () {
    htmlToImage.toPng(document.querySelector('.preview'))
  .then(function (dataUrl) {
    // 成功時に実行したい処理を記述する
    // 私の場合はダウンロード処理を実行
    const a = document.createElement('a')
    a.download = 'anime.png';
    a.href = dataUrl;
    a.click();

  });
  }
  
})

  

