document.addEventListener('DOMContentLoaded', function () {

  // 縦横表示切り替え機能の実装
  document.querySelector('#change-format-input1').onclick = function () {
    let title1 = document.querySelector('#title1');
    if (title1.style.writingMode == 'lr-tb') {
      title1.style.writingMode = 'tb-rl';
    } else {
      title1.style.writingMode = 'lr-tb';
    }
  }
  document.querySelector('#change-format-input2').onclick = function () {
    let title1 = document.querySelector('#title2');
    if (title1.style.writingMode == 'lr-tb') {
      title1.style.writingMode = 'tb-rl';
    } else {
      title1.style.writingMode = 'lr-tb';
    }
  }
  document.querySelector('#change-format-input3').onclick = function () {
    let title1 = document.querySelector('#title3');
    if (title1.style.writingMode == 'lr-tb') {
      title1.style.writingMode = 'tb-rl';
    } else {
      title1.style.writingMode = 'lr-tb';
    }
  }


  // document.querySelector('.smaller').onclick = function () {
  //   let size = 100;
  //   let title = document.querySelector('#title1');
  //   size -= 5;
  //   if (size <= 5) {
  //     size = 100
  //   }
  //   title.style.fontSize = size + 'px';
  // }
  // document.querySelector('.larger').onclick = function () {
  //   let size = 100;
  //   let title = document.querySelector('#title1');
  //   size += 5;
  //   if (size >= 80) {
  //     size = 10
  //   }
  //   title.style.fontSize = size + 'px';
  // }


  document.querySelector('#input1').onchange = function () {
    let input1 = document.querySelector('#input1').value;
    document.querySelector('#title1').innerHTML = input1;
  }
  document.querySelector('#input2').onchange = function () {
    let input1 = document.querySelector('#input2').value;
    document.querySelector('#title2').innerHTML = input1;
  }
  document.querySelector('#input3').onchange = function () {
    let input1 = document.querySelector('#input3').value;
    document.querySelector('#title3').innerHTML = input1;
  }
  
})