//Fortune Telling :)

function tellFortune() {
    e.preventDefault();

    numOfChild = document.getElementById("children").value;
    wifeOrHusband = document.getElementById("name").value;
    yourCoordinates = document.getElementById("coordinates").value;
    sillyJob = document.getElementById("jobby").value;

    doucment.getElementById("tellFortune").innerHTML =(`You will be an ${sillyJob} in ${yourCoordinates}, and married to ${wifeOrHusband} with ${numOfChild} kids.`);

}

//dog age

function calcCatAge(catAge) {
    catAge = kittenAge * 7;
    console.log(`Your cat is ${catAge} years old in cat years`)
}

//supply???

function calcSupply(age, amountPerDay){
    maxAge = 100;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}.`);


}

//circle :)

function calcCirc(radius) {
    circumference = 2 * Math.PI * radius;
    console.log(`the circumferenece is ${circumference}`);
}

const calcArea = (radius) => console.log(`The area is ${Math.PI * radius * radius}`);
//too cold :(

function celsiusToFahren(celsius) {
    fahren = celsius * 9 / 5 + 32;
    console.log(`${celsius} C is ${fahren} F`);
}

function fahrenToCelsius(fahren) {
    celsius = (fahren - 32) * 5 / 9;
    console.log(`${fahren} F is ${celsius} C`)
}