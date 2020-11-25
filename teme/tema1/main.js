var house = {
    height: 50,
    color: "white",
    numberOfFloors: 1,
    roofColor: "red",
    forSale: function() {
        console.log("This house is for sale!");
    }
}

function nume(rez) {
    console.log("Buna, numele meu este", rez);
}

console.log("height = ", house.height);
console.log("color = ", house.color);
console.log("number of floors = ", house.numberOfFloors);
console.log("roof color = ", house.roofColor);
house.forSale();

nume("Stefania");

const canvas = getElementById("canvasId");
const ctx = canvas.getContext("2D");