// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (isNaN(testInput)) {
        return "Not a Number"
    } else if (testInput === "") {
        return "Empty"
    } else if (typeof (Number(testInput)) === "number") {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotReadyForLaunch = false;
    let copilotReadyForLaunch = false;
    let fuelReadyForLaunch = false;
    let cargoReadyForLaunch = false;


    if (validateInput(pilot.value) === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch.`;
        pilotReadyForLaunch = true;
    } else {
        document.getElementById("pilotStatus").innerHTML = `${pilot} is not an acceptable entry.`;
        alert(`${pilot.value} is not an acceptable entry for Pilot Name`);
        event.preventDefault();
    }
    if (validateInput(copilot.value) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch.`;
        copilotReadyForLaunch = true;
    } else {
        document.getElementById("copilotStatus").innerHTML = `${copilot} is not an acceptable entry.`;
        alert(`${copilot.value} is not an acceptable entry for Co-Pilot Name`);
        event.preventDefault();
    }
    if (validateInput(fuelLevel.value) === "Is a Number") {
        if (Number(fuelLevel.value) >= 10000) {
            document.getElementById("fuelStatus").innerHTML = `Fuel Level is ${fuelLevel.value}(L). Ready for launch.`;
            fuelReadyForLaunch = true;
        } else {
            document.getElementById("fuelStatus").innerHTML = `Fuel Level is ${fuelLevel.value}(L). Fuel level too low. Not enough fuel for journey`;
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
            document.getElementById("launchStatus").style.color = "red";
            list.style.visibility = "visible";
            event.preventDefault();
        }
    } else {
        document.getElementById("fuelStatus").innerHTML = `${fuelLevel.value} is not an acceptable entry.`;
        alert(`${fuelLevel.value} is not an acceptable entry for Fuel Level`);
        event.preventDefault();
    }
    if (validateInput(cargoLevel.value) === "Is a Number") {
        if (Number(cargoLevel.value) <= 10000) {
            document.getElementById("cargoStatus").innerHTML = `Cargo Mass is ${cargoLevel.value}(kg). Ready for launch.`;
            cargoReadyForLaunch = true;
        } else {
            document.getElementById("cargoStatus").innerHTML = `Cargo Mass is ${cargoLevel.value}(kg). Cargo Mass is to large for shuttle takeoff.`;
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
            document.getElementById("launchStatus").style.color = "red";
            list.style.visibility = "visible";
            event.preventDefault();
        }
    } else {
        document.getElementById("cargoStatus").innerHTML = `${cargoLevel.value} is not an acceptable entry.`;
        alert(`${cargoLevel.value} is not an acceptable entry for Cargo Mass`);
        event.preventDefault();
    }
    if (pilotReadyForLaunch === true && copilotReadyForLaunch === true && fuelReadyForLaunch === true && cargoReadyForLaunch === true) {
        document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready For Launch";
        document.getElementById("launchStatus").style.color = "green";
        event.preventDefault();
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
