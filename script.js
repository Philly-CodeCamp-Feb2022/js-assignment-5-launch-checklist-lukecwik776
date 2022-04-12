// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("ALL FIELDS ARE REQUIRED!")
            event.preventDefault();
        }

        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass)
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        let planetName = chosenPlanet.name;
        let planetDiameter = chosenPlanet.diameter;
        let planetDistance = chosenPlanet.distance;
        let planetMoons = chosenPlanet.moons;
        let planetStar = chosenPlanet.star;
        let planetImage = chosenPlanet.image;

        addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImage)
    })

});