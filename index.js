function openForm() {
  document.getElementById("contactform").style.display = "block";
  document.getElementById("open-button").style.display = "none";
}

function closeForm() {
  document.getElementById("contactform").style.display = "none";
  document.getElementById("open-button").style.display = "block";
}

function showmenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}