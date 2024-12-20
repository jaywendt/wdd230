document.addEventListener("DOMContentLoaded", function() {
    fetch('rentals.json')
        .then(response => response.json())
        .then(data => {
            const vehicleInfo = document.getElementById("vehicleInfo");

            const rentalType = document.createElement("p");
            rentalType.textContent = "Vehicle Type: " + rentals.rentalType;

            const vehicle = document.createElement("p");
            vehicle.textContent = "Model: " + rentals.vehicle;

            const maxRiders = document.createElement("p");
            maxRiders.textContent = "Maximum amount of riders: " + rentals.maxRiders;

            const resHalfDay = document.createElement("p");
            resHalfDay.textContent = "Half Day Rental (with reservation): " + rentals.resHalfDay;

            const resFullDay = document.createElement("p");
            resFullDay.textContent = "Full Day Rental (with reservation): " + rentals.resFullDay;

            const walkHalfDay = document.createElement("p");
            walkHalfDay.textContent = "Half Day Rental (walk-in rental): " + rentals.walkHalfDay;

            const walkFullDay = document.createElement("p");
            walkFullDay.textContent = "Full Day Rental (walk-in rental): " + rentals.walkFullDay;
        })
})