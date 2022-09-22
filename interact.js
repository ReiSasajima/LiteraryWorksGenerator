// 全てのDOMが表示されてから駆動するfunction(headで読み込んでいるため、DOMがロードされてから機能する)
document.addEventListener('DOMContentLoaded', function () {
    // マウスで文字を動かす機能実装
      interact('.draggable')
        .draggable({
          // 慣性ありのときtrue, 慣性なしのときfalse
          inertia: true,
          // 範囲を制限するときに指定
          restrict: {
            restriction: "parent", // 親要素を範囲に指定
            endOnly: true, // trueを指定した場合、ドロップした瞬間に範囲を超えているとき、範囲内に戻す
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 } // 普通はこの設定でいい。詳細はドキュメントを参照。
          },
          // スクロールが必要な範囲にドラッグしたとき、自動的にスクロールする
          autoScroll: true,
          // call this function on every dragmove event
          onmove: function(event){
            // dragされている要素
            var target = event.target;
            // data属性から今の位置を取得して、移動分を足す
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            // 位置を変更
            target.style.webkitTransform =
            target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';
            // 位置をdata属性に保持
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
          // call this function on every dragend event
          onend: function (event) {
            // 終了したときの処理
          }
        });
  
  
})
    
