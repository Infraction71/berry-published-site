
let shipNumm;
// fetch information

//Ajax: HIt an API and get stuff back
const getShipp = async () => {
  try {
    let jsonURI = 'https://swapi.co/api/starships/' + shippNum.toString() + "/";
    alert("About to do a fetch with the URL" + jsonURI);
    const response = await fetch(jsonURI);
    alert("We're back from he fetch")
    const obj = await response.json();
    console.log(`FETCHED. Response JSON ${obj}`);
    return obj;
    
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithShip = async () => {
  try {
      alert("In the try of the updateWithShipp")
       shipNumm = parseInt(document.getElementById("speed").value);

    const answer = await getShipp(shipNumm) //fetches and loads it in one step. 
    //ok now we need to parse this thing.
    alert("Attempting to parse ");
    obj = JSON.parse(obj);
    alert("Parsed");
    let answer = "The " + obj.name + "has a max speed of " + obj.max_atmosphering_speed +" !";
    return answer;
  } 
  catch (error) { 
      console.error(error)
     }
}
