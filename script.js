let cooks = [];
function getCookie() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    let namee = c.split("=")[0];
    let valuee = c.split("=")[1];

    if (namee != "" && namee != null && valuee != "" && valuee != null) {
      cooks = cooks + [namee];
      makeDiv = document.createElement("div");
      makeDiv.innerHTML =
        "<div style='display:flex; flex-direction: column;width: 100%;'><div style='display: flex;flex-direction: row;'><img style=' height: 20px;margin: auto 0 auto 10px;' src='assets/images/notes.png'><p style='display: block; word-wrap: break-word;width: 78%;font-family: lato;font-weight: 550;font-style:italic;'>" +
        namee +
        "</p> <div id='in-js-div-del'> <img style='height: 20px' src=assets/images/delete.png></div></div><p style='margin-top:5px;display: block; word-wrap: break-word;width: 85%;font-family: lato;font-weight: 500;'>" +
        valuee +
        "</p> </div>";
      makeDiv.className = "main-divs";
      makeDiv.setAttribute("onclick", "deleteDiv(this)");
      y = document.getElementById("main-art");
      y.appendChild(makeDiv);
    }
  }
}
getCookie();
plusBtn = document.getElementById("footer-img-plus");

function closeButt(div) {
  div.remove();
}

makeDiv = document.createElement("div");

function deleteDiv(div) {
  div.remove();
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    let namee = c.split("=")[0];
    let valuee = c.split("=")[1];
    if (namee == div.querySelector("p").innerText) {
      document.cookie =
        namee + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }
}

function createDiv(namee, valuee) {
  let divv = document.getElementById("ask-div");
  let inp1 = document.getElementById("ask-inp");
  let inp2 = document.getElementById("ask-inp2");
  divv.style.animation = "fadeout 0.3s ease";
  divv.style.opacity = 1;
  divv.style.display = "flex";
  divv.style.transition = "all 0.3s ease";

  if (namee != "" && namee != null && valuee != "" && valuee != null) {
    makeDiv = document.createElement("div");
    makeDiv.innerHTML =
      "<div style='display:flex; flex-direction: column;width: 100%;'><div style='display: flex;flex-direction: row;'><img style=' height: 20px;margin: auto 0 auto 10px;' src='assets/images/notes.png'><p id='name-value' style='display: block; word-wrap: break-word;width: 78%;font-family: lato;font-weight: 550;font-style:italic;'>" +
      namee +
      "</p> <div id='in-js-div-del'> <img style='height: 20px' src=assets/images/delete.png></div></div><p style='margin-top:5px;display: block; word-wrap: break-word;width: 85%;font-family: lato;font-weight: 500;'>" +
      valuee +
      "</p> </div>";
    makeDiv.className = "main-divs";
    makeDiv.setAttribute("onclick", "deleteDiv(this)");
    y = document.getElementById("main-art");
    y.appendChild(makeDiv);

    divv.style.opacity = 0;
    divv.style.display = "none";
    let date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // 365 days from now
    let expires = "expires=" + date.toUTCString();
    nameeValue = namee;
    valueeValue = valuee;
    document.cookie =
      nameeValue + "=" + valueeValue + ";" + expires + ";path=/";
    console.log(document.cookie);
    namee = "";
    valuee = "";
    inp1.value = "";
    inp2.value = "";
  }
}
function changeTheme() {
  let icon = document.getElementById("changeMode");
  if (icon.src.includes("dark")) {
    icon.src = "assets/images/light_mode_FILL1_wght400_GRAD0_opsz24 (1).svg";
    let body = document.getElementById("body");
    body.style.transition = "all 0.5s ease";
    body.style.backgroundColor = "#242424";
    let bottom = document.getElementById("footer-div");
    bottom.style.filter = "brightness(0.8)";
    let header = document.getElementById("header");
    document.getElementById("main-art").style.filter = "brightness(0.8)";
    header.style.filter = "brightness(0.8)";
    document.getElementById("ask-div").style.filter = "brightness(0.8)";
  } else if (icon.src.includes("light")) {
    icon.src = "assets/images/dark_mode_FILL1_wght400_GRAD0_opsz24 (1).svg";
    body.style.backgroundColor = "white";

    document.getElementById("ask-div").style.filter = "brightness(1)";
    // document.getElementById("body").style.filter = "brightness(1)";
    document.getElementById("main-art").style.filter = "brightness(1)";
    document.getElementById("header").style.filter = "brightness(1)";
    document.getElementById("footer-div").style.filter = "brightness(1)";
  }
}
