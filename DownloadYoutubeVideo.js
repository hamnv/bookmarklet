javascript: (function () {
  var link = window.location.href;
  var cutlink = link.split("watch?v=");
  var link1 = cutlink[1];
  var cutlink1 = link1.split("&");
  var link2 = cutlink1[0];
  var link3 = "https://www.y2mate.com/youtube/" + link2;
  window.open(link3, "_blank");
})();

// javascript: (function () {  var link = window.location.href;  var cutlink = link.split("watch?v=");  var link1 = cutlink[1];  var cutlink1 = link1.split("&");  var link2 = cutlink1[0];  var link3 = "https://www.y2mate.com/youtube/" + link2;  window.open(link3, '_blank');;})();