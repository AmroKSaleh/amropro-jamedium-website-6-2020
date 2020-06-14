const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

var memory = 0;
var hasAlreadySubmitedrS = false;
var hasAlreadySubmitedrP = false;
var hasAlreadySubmitedcS = false;
var hasAlreadySubmitedcP = false;


function makeInputs(i,  CORR) {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("id", "in" + i.toString());
  document.getElementById(CORR + "-inputs").appendChild(x);
}

// function removeElement(elementId) {
// // Removes an element from the document.
// var element = document.getElementById(elementId);
// element.parentNode.removeChild(element);
// }

// function findHowMuchToDelete() {
//   var i;
//   try{
//     for(i = 0;i<parseInt(document.getElementById("resNum").value);i++){
//       removeElement("in" + (i).toString());
//       var x = 0;
//     }
//   }
//   catch{
//     return i;
//   }
// }

// function addLoop(){
  // var resNum = parseInt(document.getElementById("resNum").value);
  // var rep = 0;
  // if(hasAlreadySubmited){
  //   for(var i = 0;i<findHowMuchToDelete();i++){
  //     removeElement("in" + i.toString());
  //   }
  //   removeElement("calculate");
  // }
  // else{
  //   hasAlreadySubmited = true;
  // }
  // for(rep = rep; rep<resNum; rep++){
  //   makeInputs(rep);
  //   memory++;
  // }
  // var x = document.createElement("BUTTON");
  // x.setAttribute("onclick","calculate()");
  // x.id = "calculate";
  // x.style.width = "100px";
  // document.getElementById("res-ser-inputs").appendChild(x);
  // x.innerText = "احسب";
// }

function add(CORR){
  var out = 0;
  var resNum = parseInt(document.getElementById(CORR + "Num").value);
  for(var rep = 0; rep<resNum; rep++){
    var input = parseInt(document.getElementById("in" + (rep.toString())).value);
    out += input;
  }
  var x = document.getElementById(CORR + "Out");
  x.innerText = "الناتج: "+ (out).toString();
}








function InverseAdd(CORR){
  var out = 0;
  var resNum = parseInt(document.getElementById(CORR + "Num").value);
  for(var rep = 0; rep<resNum; rep++){
    var input = parseInt(document.getElementById("in" + (rep.toString())).value);
    out += 1/input;
  }
  var x = document.getElementById(CORR + "Out");
  x.innerText = "الناتج: " + (1/out).toString();
}








function AddResSer() {
  var resNum = parseInt(document.getElementById("resSerNum").value);
  var rep = 0;
  if(hasAlreadySubmitedrS){
    removeElement("calculate");
  }
  else{
    hasAlreadySubmitedrS = true;
  }
  for(rep = rep; rep<resNum; rep++){
    makeInputs(rep, "res-ser");
    memory++;
  }
  var x = document.createElement("BUTTON");
  x.setAttribute("onclick","add('resSer')");
  x.id = "calculate";
  x.style.width = "100px";
  document.getElementById("res-ser-inputs").appendChild(x);
  x.innerText = "احسب";
}










function AddResPar() {
  var resNum = parseInt(document.getElementById("resParNum").value);
  var rep = 0;
  if(hasAlreadySubmitedrP){
    removeElement("calculate");
  }
  else{
    hasAlreadySubmitedrP = true;
  }
  for(rep = rep; rep<resNum; rep++){
    makeInputs(rep, "res-par");
    memory++;
  }
  var x = document.createElement("BUTTON");
  x.setAttribute("onclick","InverseAdd('resPar')");
  x.id = "calculate";
  x.style.width = "100px";
  document.getElementById("res-par-inputs").appendChild(x);
  x.innerText = "احسب";
}





function AddCapSer() {
  var resNum = parseInt(document.getElementById("capSerNum").value);
  var rep = 0;
  if(hasAlreadySubmitedcS){
    removeElement("calculate");
  }
  else{
    hasAlreadySubmitedcS = true;
  }
  for(rep = rep; rep<resNum; rep++){
    makeInputs(rep, "cap-ser");
    memory++;
  }
  var x = document.createElement("BUTTON");
  x.setAttribute("onclick","InverseAdd('capSer')");
  x.id = "calculate";
  x.style.width = "100px";
  document.getElementById("cap-ser-inputs").appendChild(x);
  x.innerText = "احسب";
}






function AddCapPar() {
  var resNum = parseInt(document.getElementById("capParNum").value);
  var rep = 0;
  if(hasAlreadySubmitedcP){
    removeElement("calculate");
  }
  else{
    hasAlreadySubmitedcP = true;
  }
  for(rep = rep; rep<resNum; rep++){
    makeInputs(rep, "cap-par");
    memory++;
  }
  var x = document.createElement("BUTTON");
  x.setAttribute("onclick","add('capPar')");
  x.id = "calculate";
  x.style.width = "100px";
  document.getElementById("cap-par-inputs").appendChild(x);
  x.innerText = "احسب";
}









var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabPanels.forEach(function(node){
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
