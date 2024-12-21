fetch("data/rentals.json")

.then(function(response){
    return response.json();
})

.then(function(rentals){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let rental of rentals){
        out += `
            <tr>
                <td>${rental.rentalType}</td>
                <td>${rental.vehicle}</td>
                <td>${rental.maxRiders}</td>
                <td>${rental.resHalfDay}</td>
                <td>${rental.resFullDay}</td>
                <td>${rental.walkHalfDay}</td>
                <td>${rental.walkFullDay}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
})