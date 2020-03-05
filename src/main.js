function convertToMPH(){
//alert("Method called");
    const CONVERSION = 0.621371;
    const MESSAGE = "The converted speed is: "; 
  //  alert('We are about to get the value');
    let speedInMPH = parseFloat(document.getElementById("speed").value);
  //  alert('We Got the value: '+ speedInMPH);
    let convertedSpeed = speedInMPH*CONVERSION;
  //  alert('We did a conversion');
    document.getElementById("convertedSpeed").innerHTML = MESSAGE + convertedSpeed + "MPH";
    localStorage.setItem("mph",parseInt(localStorage.getItem("mph")+1));
}

function convertToKPH(){
    //alert("Method called");

    const CONVERSION = 1.60934;
    const MESSAGE = "The converted speed is: "; 
   // alert('We are about to get the value');
    let speedInKPH = parseFloat(document.getElementById("speed").value);
   // alert('We Got the value: '+ speedInMPH);
    let convertedSpeed = speedInKPH*CONVERSION;
   // alert('We did a conversion!');

    document.getElementById("convertedSpeed").innerHTML = MESSAGE + convertedSpeed + "KPH";
    localStorage.setItem("kph",parseInt(localStorage.getItem("kph")+1));
}

function convertToSW(){
  //alert("Method called");

  
 //alert('We are about to get the value');
  let shippNum = parseInt(document.getElementById("speed").value);
  if(shippNum <0 || shippNum> 42){ //42 is the uper limit of SWAPIs starship refrence. 
    document.getElementById("convertedSpeed").innerHTML = "Starship number must be between 0 and 41, inclusive.";
    return;
  }
  else{
    alert("About to enter updateWithShipp");
    let ship = updateWithShip();
    document.getElementById("convertedSpeed").innerHTML = ship;
    localStorage.setItem("sw",parseInt(localStorage.getItem("sw")+1));


  }

}

//local storage access
function convertToLCS(){
  //alert("Method called");

  
  let msg = "You have requested MPH " + localStorage.getItem("mph") + " times, KPH " + localStorage.getItem("kph") +" times and Starwars "
        + localStorage.getItem("sw") +" times"; 
 

  document.getElementById("convertedSpeed").innerHTML = msg;
}



