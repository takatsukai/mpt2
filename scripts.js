
var tempA = form1.tempA;
var select1 = form1.select1;
var select2 = form1.select2;
var result = form1.result;
var tempB;

function unitSame(e){
	if(select1[select1.selectedIndex].value == select2[select2.selectedIndex].value){
		tempB = Number(tempA.value);
	}
	else if(select1[select1.selectedIndex].value == "c") {
      if(select2[select2.selectedIndex].value == "f") {
      tempB = Math.round(9/5*Number(tempA.value)+32);
      }
      else if(select2[select2.selectedIndex].value == "k") {
      tempB = Math.round(Number(tempA.value)+273);
      }
	}
	else if(select1[select1.selectedIndex].value == "f") {
      if(select2[select2.selectedIndex].value == "c") {
      tempB = Math.round(5/9*Number(tempA.value-32));
      }
      else if(select2[select2.selectedIndex].value == "k") {
      tempB = Math.round(5/9*Number(tempA.value-32)+273);
      }
  }
  else if(select1[select1.selectedIndex].value == "k") {
      if(select2[select2.selectedIndex].value == "c") {
      tempB = Math.round(Number(tempA.value)-273);
      }
      else if(select2[select2.selectedIndex].value == "f") {
      tempB = Math.round(5/9*Number(tempA.value-32)-273);
      }
	}
  
  
	result.value = "Temperature in "+select2[select2.selectedIndex].text+" is "+tempB;
	result.classList.add("result");
}
form1.addEventListener("change",unitSame);
