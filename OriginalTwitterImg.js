javascript: (function () {
  var link = window.location.href;
  var cutlink = link.split("?");
  var link0 = cutlink[1];
  var link1 = "?" + link0;
  if (link.slice(-4) == ".jpg") {
    var link3 = link.replace(".jpg", ".jpg:orig");
    location.href = link3;
  } else {
    var link2 = link.replace(link1, ".jpg:orig");
    location.href = link2;
  }
})();

// javascript: (function() { var link = window.location.href; var cutlink = link.split("?"); var link0 = cutlink[1]; var link1 = "?" + link0; if(link.slice(-4)==".jpg"){ var link3 = link.replace(".jpg", ".jpg:orig"); location.href = link3; } else { var link2 = link.replace(link1, ".jpg:orig"); location.href = link2; } })();