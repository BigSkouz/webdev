//strings

const myName = "The Big Skouz"

let favoriteMealOfTheDay = "Breakfast Time"

let timeOfDay = "Morning"

//numbers

let age = 17

const timeAlarmGoesBeep = 7

const favoriteNumber = 4

//booleans

const isHome = true

let breakfastTime = true

const silly = true

//arrays

const breakfastOptions = [' Cereal', ' Waffles', ' British Breakfast (eeg and sasuge)']

const breakfastBeverage = [' Apple Juice', ' Milk', ' The Airport Jungle Juice']

const breakfastEntertainment = [' Movie (breakfast club)', ' Youtube (cooking tutorial)', ' Book (cookbook)']

//objects

const breakfastTable = {
    color: "white",
    material: "marble",
    type: "countertop",
}

const breakfastChair = {
    color: "black and brown",
    material: "metal and leather",
    type: "stool",

}

const breakfastUtensils = {
    containers: ["plate ", "bowl ", "cup "],
    utensils: ["fork ", "knife ", "spoon ", "double sided spoon "],
    friends: "breakfast buddies (they help)"

}

//functions

if(myName === "The Big Skouz" && age === 17){
    alert(`Hola! ${myName} who is also ${age} Welcome to Breakfast Time :)`)
} else {
      alert("Hello Mr. Frog :)    you're not supposed to be here >:( ")
}

if( timeOfDay === "Morning" && isHome === true && breakfastTime === true){
    document.getElementById("todoListTitle").innerHTML = `My Morning To Do List :)`
}

//list

document.getElementById("list1").innerHTML = `Alarm goes off at ${timeAlarmGoesBeep}`

document.getElementById("list2").innerHTML = `Check if time is ${timeOfDay}`

document.getElementById("list3").innerHTML = `Check if me being home is equal to ${isHome}`

document.getElementById("list4").innerHTML = `Find something to eat out of: ${breakfastOptions} `

document.getElementById("list5").innerHTML = `Find something to drink out of: ${breakfastBeverage} `

document.getElementById("list6").innerHTML = `Find something to do out of: ${breakfastEntertainment}  `

document.getElementById("list7").innerHTML = `Find my Breakfast Table which is ${breakfastTable.color}, made of ${breakfastTable.material}, and is a ${breakfastTable.type}` 

document.getElementById("list8").innerHTML = `Find my Breakfast Chair which is ${breakfastChair.color}, made of ${breakfastChair.material}, and is a ${breakfastChair.type}` 

document.getElementById("list9").innerHTML = `Find my Breakfast utensils which are: ${breakfastUtensils.utensils}, my containers which are: ${breakfastUtensils.containers}, and assemble my ${breakfastUtensils.friends}` 

//other

document.getElementById("title").innerHTML = `Yay! It's ${favoriteMealOfTheDay}!`

document.getElementById("silly").innerHTML = `Also my favorite number is ${favoriteNumber} (very relevant and important information) and according to studies, my silliness is ${silly}`





