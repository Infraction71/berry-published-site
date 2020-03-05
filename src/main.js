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
}

function convertToKPH(){
  //alert("Method called");

  const CONVERSION = 1.60934;
  const MESSAGE = "The converted speed is: "; 
 // alert('We are about to get the value');
  let shippNum = parseInt(document.getElementById("speed").value);
  if(shippNum <0 || shippNum> 42){ //42 is the uper limit of SWAPIs starship refrence. 
    document.getElementById("convertedSpeed").innerHTML = "Starship number must be between 0 and 41, inclusive.";
    return
    let jsonURI = 'https://swapi.co/api/starships/' + shippNum.toString() + "/";
  }
  else{
   

  }

}

const

