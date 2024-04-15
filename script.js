function getCookie() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  let cname = "";

  for (let i = 0; i < ca.length; i++) {
    cname = ca[i].split("=")[0];
    if (cname != "" && cname != null) {
      makeDiv = document.createElement("div");
      makeDiv.innerHTML =
        "<img style=' height: 20px;margin: auto 0 auto 10px;' src='assets/images/notes.png'><p style='display: block; word-wrap: break-word;width: 78%;'>" +
        cname +
        "</p> <div id='in-js-div-del'> <img style='height: 20px' src=assets/images/delete.png></div>";
      makeDiv.className = "main-divs";
      makeDiv.setAttribute("onclick", "deleteDiv(this)");
      y = document.getElementById("main-art");
      y.appendChild(makeDiv);
    }
  }
}
getCookie();
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

makeDiv = document.createElement("div");

function deleteDiv(div) {
  div.remove();
  document.cookie =
    div.innerText + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ";
}

function createDiv(text) {
  divv = document.getElementById("ask-div");
  input = document.getElementById("ask-inp");
  textV = input.value;
  divv.style.animation = "fadeout 0.3s ease";
  divv.style.opacity = 1;
  divv.style.display = "flex";
  divv.style.transition = "all 0.3s ease";

  if (textV != "" && textV != null) {
    makeDiv = document.createElement("div");
    makeDiv.innerHTML =
      "<img style=' height: 20px;margin: auto 0 auto 10px;' src='assets/images/notes.png'><p style='display: block; word-wrap: break-word;width: 78%;'>" +
      textV +
      "</p> <div id='in-js-div-del'> <img style='height: 20px' src=assets/images/delete.png></div>";
    makeDiv.className = "main-divs";
    makeDiv.setAttribute("onclick", "deleteDiv(this)");
    y = document.getElementById("main-art");
    y.appendChild(makeDiv);
    input.value = "";
    divv.style.opacity = 0;
    divv.style.display = "none";
    document.cookie =
      textV + "=" + textV + "; expires=Fri, 31 Dec 9999 23:00:00 UTC; path=/";
    console.log(document.cookie);
  }
}
