function calculateMileage() {
    // Get input values
    var currentOdometer = parseFloat(document.getElementById('currentOdometer').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    var fuelAmount = parseFloat(document.getElementById('fuelAmount').value);
    var mileage = parseFloat(document.getElementById('mileage').value) || 45; // Default mileage is 45 km per litre

    // Calculate drivable kms
    var drivableKms = Math.round((fuelAmount / fuelPrice) * mileage);

    // Update final odometer reading and round to zero decimal places
    var finalOdometer = currentOdometer + drivableKms;

    // Display the result
    document.getElementById('finalOdometer').innerHTML = finalOdometer;
    document.getElementById('distance').innerHTML = drivableKms;

}


function validateAndCalculate() {
    // Remove previous highlighting
    var inputs = document.querySelectorAll('.required-field');
    inputs.forEach(function (input) {
        input.classList.remove('required-field');
    });

    // Input validation logic
    var currentOdometer = parseFloat(document.getElementById('currentOdometer').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    var fuelAmount = parseFloat(document.getElementById('fuelAmount').value);
    var mileage = parseFloat(document.getElementById('mileage').value);

    // Highlight empty fields and return if any are empty
    if (!fuelPrice) {
        document.getElementById("fuelPrice").classList.add('required-field');
    }
    if (!mileage) {
        document.getElementById("mileage").classList.add('required-field');
    }
    if (!currentOdometer) {
        document.getElementById("currentOdometer").classList.add('required-field');
    }
    if (!fuelAmount) {
        document.getElementById("fuelAmount").classList.add('required-field');
    }

    // Check if any required field is empty and return without executing further
    if (!fuelPrice || !mileage || !currentOdometer || !fuelAmount) {
        return;
    }

    // Perform calculation logic here...
    // Example: document.getElementById("dynamicContentBox").value = calculateResult;
    // Calculate drivable kms
    var drivableKms = Math.round((fuelAmount / fuelPrice) * mileage);

    // Update final odometer reading and round to zero decimal places
    var finalOdometer = currentOdometer + drivableKms;

    // Display the result
    document.getElementById('finalOdometer').innerHTML = finalOdometer;
    document.getElementById('distance').innerHTML = drivableKms;

}

window.odometerOptions = {
    format: 'd',
    duration: 3000
}

document.addEventListener('DOMContentLoaded', function () {
    var finalOdometer = document.getElementById('finalOdometer');
    var odometerOne = new Odometer({
        el: finalOdometer,
        value: 1111,
        format: 'd'
    });

    var distance = document.getElementById('distance');
    var odometerTwo = new Odometer({
        el: distance,
        value: 11,
        format: 'd'
    });

    odometerOne.render(); // Render the odometer
    odometerTwo.render(); // Render the odometer
});


// Add this to your script.js file
function openTab(tabId) {
    // Get all elements with class "tab-content" and hide them
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Get all elements with class "tab-btn" and remove the "active" class
    var tabButtons = document.getElementsByClassName('tab-btn');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add the "active" class to the clicked tab button
    event.currentTarget.classList.add('active');
}

function validateAndCalculateFuelCost() {
    // Remove previous highlighting
    var inputs = document.querySelectorAll('.required-field');
    inputs.forEach(function (input) {
        input.classList.remove('required-field');
    });

    // Input validation logic
    var distanceToTravel = parseFloat(document.getElementById('distanceToTravelF').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPriceF').value);
    var mileage = parseFloat(document.getElementById('mileageF').value);

    // Highlight empty fields and return if any are empty
    if (!distanceToTravel) {
        document.getElementById("distanceToTravel").classList.add('required-field');
    }
    if (!fuelPrice) {
        document.getElementById("fuelPrice").classList.add('required-field');
    }
    if (!mileage) {
        document.getElementById("mileage").classList.add('required-field');
    }

    // Check if any required field is empty and return without executing further
    if (!distanceToTravel || !fuelPrice || !mileage) {
        return;
    }

    // Perform calculation logic here...
    // Example: document.getElementById("dynamicContentBox").value = calculateResult;
    // Calculate drivable kms
    var fuelCost = Math.round((distanceToTravel / mileage) * fuelPrice);

    // Display the result
    document.getElementById('fuelCostF').innerHTML = fuelCost;
}