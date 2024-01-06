var indiceImage =0;

function afficheImage (){
  var diapo =document.getElementById("diapo");
 diapo.src=tabImages[indiceImage];
}
function imageSuivante (){
  var num = document.getElementById("lenumero");
  
  if (indiceImage < tabImages.length-1) {
  indiceImage ++;
  var lol=tabImages[indiceImage].slice(7,tabImages[indiceImage].indexOf("."));
  num.value = (indiceImage+1) + "/" + tabImages.length + "  | " + lol ;
  }
  else {
  indiceImage=0;
  var lol=tabImages[indiceImage].slice(7,12);
  num.value = "1" + "/" + tabImages.length + "  | " + lol;
  }
afficheImage();
}



//function lanceLecture () {
 // monTimer = window.setInterval(imageSuivante, 2000);
//}
var setupListener = function () {
  // var Next = document.getElementById("suivante");
  //Next.addEventListener("click",imageSuivante);
  //var monTimer;
  //var LECTURE = document.getElementById("lec");
  //LECTURE.addEventListener("click", function lanceLecture() {
  // monTimer = window.setInterval(imageSuivante, 2000);
  //});
  // var STOP = document.getElementById("sto");
  // STOP.addEventListener("click",function arreterLecture() {
  //   window.clearInterval(monTimer);
  //});
var b=document.getElementById("twoinone");
b.addEventListener("click", action);
}
var monTimer;
function lanceLecture() {
  monTimer = window.setInterval(imageSuivante, 2000);
}
function arreterLecture() {
  window.clearInterval(monTimer);
}
var  on= false;
var action= function (){
  let b=document.getElementById("twoinone");
  if (on) {
    on = false;
    arreterLecture();
    b.innerHTML = "<button> <img src=images/play.png height=20 width=20 /></button>";
  }
  else {
    on = true;
    lanceLecture();
    b.innerHTML = " <button> <img src=images/pause.jpg height=20 width=20  /> </button> ";
  }
}

window.addEventListener("load",setupListener);
