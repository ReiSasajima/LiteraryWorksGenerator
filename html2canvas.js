document.addEventListener('DOMContentLoaded', function () {
  
  // ダウンロード機能の実装
  document.querySelector("#download-btn").onclick = function() {
    html2canvas(document.querySelector(".preview"), {scale: 5}).then(canvas => { 
      let downloadEle = document.createElement("a");
      downloadEle.href = canvas.toDataURL("image/png");
      downloadEle.download = "canvas.png";
      downloadEle.click();
      });
  }
})