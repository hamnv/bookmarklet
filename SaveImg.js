javascript:;
(function () {
  var images = [].slice.call(document.querySelectorAll("img"));
  try {
    images.forEach(function (img) {
      downloadImage(img);
    });
  } catch (e) {
    alert("Download failed.");
    console.log("Download failed.", e);
  }
  function downloadImage(img) {
    var link = document.createElement("a");
    link.setAttribute("href", img.src);
    link.setAttribute("download", "");
    link.click();
  }
}.call(window));

// javascript:;(function() {var images = [].slice.call(document.querySelectorAll('img'));try {images.forEach(function(img){downloadImage(img)})} catch (e) {alert('Download failed.');console.log('Download failed.', e)}function downloadImage(img) {var link = document.createElement('a');link.setAttribute('href', img.src);link.setAttribute('download', '');link.click()}}).call(window);