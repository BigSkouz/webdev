const miLlamo = "Miles Skousen"

let favColor = "I can't see them :("

favColor = "I lied, I can see them >:) (just not very well)"

let age = 17

mainPerson = {
    name: "Silly Skousen",
    age: 17,
    favColor: "Blue (it might be purple I'm not sure)",
    favFoods: ["Taco", "Silly Spaghetti", "Pizza (fnaf)"]
}

favThings= ['pi', "Vijeo Gams"]

const isAlive = true

function describePerson(person) {
    // alert("THEY ARE GONE (MISSING) FIND PLEASE ALERT: " + person.name)
    alert(`GONE AGAIN (FIND THE MISSING PERSON) ALERT: ${person.name} missing since 1803, wearing an among us t-shirt.`)
}

describePerson(mainPerson)

if(age >= 17 && miLlamo === "Miles Skousen" ) {
    alert("Almost adult L")
    document.getElementById("title").innerHTML = `Hola ${miLlamo}`
} else if (age < 17){
    alert("skill issue (not old enough L)")
} else {
    alert("what")
}

//Dom = Document Object Model

const para = document.createElement("p")
para.innerHTML = "I have been born but how???? le coffe is the answer.";
document.getElementById("div1").appendChild(para);