"use strict";

window.onload = function () {
  var sections = document.getElementsByClassName('sects');
  var backGrounds = ["url('assets/abstract-1501710_1280.jpg')", "url('assets/business-1012761_1920.jpg')", "url('assets/matrix-1735640_1920.jpg')", "url('assets/social-networking-2187996_1920.jpg')"];
  var url = '#header';

  function resize() {
    var height = window.innerHeight + 'px';

    for (var i = 0; i < sections.length; i++) {
      sections[i].style.height = height;
    }

    window.location.href = url;
  }

  function changeUrl(e) {
    url = e.target.hash;
  }

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    section.onclick = changeUrl;
    section.style.backgroundImage = backGrounds[i];
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
  }

  resize();
  window.onresize = resize;
};