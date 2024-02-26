function op() {
  var nav = document.getElementById("side-nav");
  nav.style.left = "0%";
}
function clo() {
  var nav = document.getElementById("side-nav");
  nav.style.left = "-60%";
}
function show(event) {
  var coll = document.getElementById("collections");
  var item = coll.querySelectorAll("div");
  var data = event.target.value.toLowerCase();
  var a = 0;
  for (var i = 0; i < item.length; i++) {
    var text = item[i].querySelector("p").textContent.toLowerCase();
    if (text.indexOf(data) < 0) {
      item[i].style.display = "none";
      if (item[i].style.display === "none") {
        a++;
      }
      if (a === item.length) {
        H1.style.display = "block";
        H3.style.display = "block";
        div_p_l.style.display="none"
      }
    } else {
      item[i].style.display = "block";
      H1.style.display = "none";
      H3.style.display = "none";
      div_p_l.style.display="block"
    }
  }
}

