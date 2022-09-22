document.addEventListener("DOMContentLoaded", function () {
  
  document.querySelector('#download-btn').addEventListener('click', async () => {
  try {
    const img = new Image();
		img.onload = () => downloadImage(img.src);
    img.src = await domtoimage.toPng(document.querySelector('.screenshot'));
  } catch (err) {
    console.error(err);
  }
  });

  function downloadImage(dataUrl) {
    const name = 'screenshot.png';
    const a = document.createElement('a');

    a.href = dataUrl;
    a.download = name;
    a.click();
  }
})
