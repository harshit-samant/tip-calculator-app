// jshint esversion: 6

let bill_amt = 0;
let no_of_people = 0;
let tip = 0;
let total = 0;
let tip_per_person = 0;
let total_per_person = 0;

function values(elem) {
  if (elem.id === 'bill') {
    bill_amt = parseFloat(elem.value);
  } else {
    if(elem.value === ''){
      no_of_people = 0;
      document.getElementById("label").style.visibility = "visible";
      elem.classList.add("input-error");
      document.getElementById("p1").innerText = "$0.00";
      document.getElementById("p2").innerText = "$0.00";
    } else{
      elem.classList.remove("input-error");
      document.getElementById("label").style.visibility = "hidden";
      no_of_people = parseInt(elem.value);
    }
  }
}

function tipCal(elem) {
  if (String(elem.id) === "custom") {
    tip = parseFloat(elem.value);
    for(let i=0; i < 5; i++){
      document.getElementsByClassName("button")[i].classList.remove("active");
    }
  } else {
    document.getElementById("custom").value = '';
    tip = parseInt(elem.id);
    for(let i=0; i < 5; i++){
      document.getElementsByClassName("button")[i].classList.remove("active");
    }
    elem.classList.add("active");
  }

}

function calculate() {
  if (bill_amt && no_of_people && tip) {
    tip_per_person = ((bill_amt * (tip / 100)) / no_of_people).toFixed(2);

    total = (bill_amt + (bill_amt * (tip / 100))).toFixed(2);

    total_per_person = (total / no_of_people).toFixed(2);

    document.getElementById("p1").innerText= "$" + tip_per_person;
    document.getElementById("p2").innerText = "$" + total_per_person;

    document.getElementById("reset").disabled = false;
  }
}

function reset(){
  location.reload();
}
