function convertToMPH(){
    const CONVERSION = 0.621371;
    const MESSAGE = "The converted speed is: "; 
    let speedInMPH = parseFloat(document.getElementById("speed").value);
    let convertedSpeed = speedInMPH*CONVERSION;
    document.getElementById("convertedSpeed").innerHTML = MESSAGE + convertedSpeed + "MPH";
}

function convertToKPH(){
    const CONVERSION = 1.60934;
    const MESSAGE = "The converted speed is: "; 
    let speedInKPH = parseFloat(document.getElementById("speed").value);
    let convertedSpeed = speedInKPH*CONVERSION;
    document.getElementById("convertedSpeed").innerHTML = MESSAGE + convertedSpeed + "KPH";
}

