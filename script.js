window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse= myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        pickPlanet(listedPlanets);
        let target = pickPlanet(listedPlanets);
          addDestinationInfo(document, target.name, target.diameter, target.star, target.distance, target.moons, target.image)
  
    })
    let form = document.querySelector("form");
    let list = document.querySelector('#faultyItems');
    list.style.visibility='hidden';
    form.addEventListener("submit", function(event) {
     event.preventDefault();
     let pilotName = document.querySelector("input[name=pilotName]").value;
     let copilotName = document.querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
     let cargoMass = document.querySelector("input[name=cargoMass]").value;
     formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
   });
  
  });