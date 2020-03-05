function convertToMPH(){
  const MESSAGE = "The converted speed is: "; 

    let speedInMPH = parseFloat(document.getElementById("speed").value);
  //  alert('We Got the value: '+ speedInMPH);
    
    let convertedSpeed = toMPH(speedInMPH);
    document.getElementById("convertedSpeed").innerHTML = MESSAGE + convertedSpeed + "MPH";
    //Local Storage is being a pain, so we need to break it into two steps.
    let numTimes=  parseInt(localStorage.getItem("kph"));
    numTimes +=1;
    localStorage.setItem("kph",numTimes);
}

function convertToKPH(){
  const MESSAGE = "The converted speed is: "; 

    //alert("Method called");
    let speedInKPH = parseFloat(document.getElementById("speed").value);
    //  alert('We Got the value: '+ speedInMPH);
    let convertedSpeed = toKPH(speedInKPH);
    document.getElementById("convertedSpeed").innerHTML = MESSAGE + convertedSpeed + "KPH";
    let numTimes=  parseInt(localStorage.getItem("mph"));
    numTimes +=1;
    localStorage.setItem("mph",numTimes);
    //  localStorage.setItem("kph", 0);
    //  localStorage.setItem("mph", 0);
    
}
//Testable funcitons
function toMPH(speedIN){
 //alert("Method called");
 const CONVERSION = 0.621371;
//  alert('We are about to get the value');
if(speedIN <0) return null;
//  alert('We Got the value: '+ speedInMPH);
 return speedIN*CONVERSION;
//  alert('We did a conversion');

}

function toKPH(speedIN){
  //alert("Method called");

  const CONVERSION = 1.60934;
 // alert('We are about to get the value');
 if(speedIN <0) return null;
 // alert('We Got the value: '+ speedInMPH);
  return  speedIN*CONVERSION;
 // alert('We did a conversion!');

 
}

async function  convertToSW(){
  //alert("Method called");

  
 //alert('We are about to get the value');
  let shippNum = parseInt(document.getElementById("speed").value);
  if(shippNum <0 || shippNum> 42){ //42 is the uper limit of SWAPIs starship refrence. 
    document.getElementById("convertedSpeed").innerHTML = "Starship number must be between 0 and 41, inclusive.";
    return;
  }
  else{
    //alert("About to enter updateWithShipp");
    await toShip(shippNum);
   // localStorage.setItem("sw", 0); //This line is for resetting local storage on a debug. 
  }

  async function toShip(shipOut){
    //alert("About to enter updateWithShipp");
    let ship = await updateWithShip(shipOut);
    document.getElementById("convertedSpeed").innerHTML = ship.toString();
    let numTimes=  parseInt(localStorage.getItem("sw"));
    numTimes +=1;
    localStorage.setItem("sw",numTimes);
   // localStorage.setItem("sw", 0); //This line is for resetting local storage on a debug. 
  }

}

//local storage access
function convertToLCS(){
  //alert("Method called");

  
  let msg = "You have requested MPH " + localStorage.getItem("mph") + " times, KPH " + localStorage.getItem("kph") +" times and Starwars "
        + localStorage.getItem("sw") +" times"; 
 

  document.getElementById("convertedSpeed").innerHTML = msg;
}



