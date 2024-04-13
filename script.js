let textV = "";
plusBtn = document.getElementById("footer-img-plus");

// function createDiv(text) {
//   textV = prompt("Write About Your Plans :)");
//   x = document.createElement("div");
//   x.innerHTML =
//     "<img style=' height: 20px;margin: auto 0 auto 10px;' src='assets/images/notes.png'><p style='display: block; word-wrap: break-word;width: 78%;'>" +
//     textV +
//     "</p> <img o style='height: 20px' src='assets/images/delete.png'>";
//   x.className = "main-divs";

//   y = document.getElementById("main-art");
//   y.appendChild(x);
// }
// x.querySelector('img[src="assets/images/delete.png"]').addEventListener(
//   "click",
//   function () {
//     x.remove();
//   }
// );

function closeButt(div) {
  div.remove();
}

function createDiv(text) {
  divv = document.getElementById("ask-div");
  input = document.getElementById("ask-inp");
  textV = input.value;
  divv.style.display = "flex";
  if (textV != "" && textV != null) {
    x = document.createElement("div");
    x.innerHTML =
      "<img style=' height: 20px;margin: auto 0 auto 10px;' src='assets/images/notes.png'><p style='display: block; word-wrap: break-word;width: 78%;'>" +
      textV +
      "</p> <div id='in-js-div-del'> <img style='height: 20px' src=assets/images/delete.png></div>";
    x.className = "main-divs";
    x.setAttribute("onclick", "this.remove()");
    y = document.getElementById("main-art");
    y.appendChild(x);
    input.value = "";
    divv.style.display = "none";
  }
}
