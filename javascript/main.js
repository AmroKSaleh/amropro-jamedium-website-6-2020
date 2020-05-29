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
var hasAlreadySubmited = false;
function makeInputs(i) {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("id", "in" + i.toString());
  document.getElementById("b").appendChild(x);
}

function removeElement(elementId) {
// Removes an element from the document.
var element = document.getElementById(elementId);
element.parentNode.removeChild(element);
}

function findHowMuchToDelete() {
  var i;
  try{
    for(i = 0;i<parseInt(document.getElementById("resNum").value);i++){
      removeElement("in" + (i).toString());
      var x = 0;
    }
  }
  catch{
    return i;
  }

}

function addLoop(){
  var resNum = parseInt(document.getElementById("resNum").value);
  var rep = 0;
  if(hasAlreadySubmited){
    for(var i = 0;i<findHowMuchToDelete();i++){
      removeElement("in" + i.toString());
    }
    removeElement("calculate");
  }
  else{
    hasAlreadySubmited = true;
  }
  for(rep = rep; rep<resNum; rep++){
    makeInputs(rep);
    memory++;
  }
  var x = document.createElement("BUTTON");
  x.setAttribute("onclick","calculate()");
  x.id = "calculate";
  x.style.width = "100px";
  document.getElementById("b").appendChild(x);
  x.innerText = "احسب";
}

function calculate(){
  var out = 0;
  var resNum = parseInt(document.getElementById("resNum").value);
  for(var rep = 0; rep<resNum; rep++){
    var input = parseInt(document.getElementById("in" + (rep.toString())).value);
    out += 1/input;
  }
  var x = document.getElementById("out");
  x.innerText = "الناتج: "+(1/out).toString();
}