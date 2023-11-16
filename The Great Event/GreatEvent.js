document.getElementById("greeting").addEventListener("click", function() {
    document.getElementById("greeting").innerHTML = "Goodbye!";
});

document.getElementById("greeting").addEventListener("dblclick", function() {
    document.getElementById("greeting").innerHTML = "Hola Watchers";
});

document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "blue";
    document.getElementById("color").style.height = "700px";
    document.getElementById("color").style.width = "700px";
    document.getElementById("color").style.borderRadius = "50%";
});

document.getElementById("color").addEventListener("mouseout", function () {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.height = "300px";
    document.getElementById("color").style.width = "300px";
    document.getElementById("color").style.borderRadius = "0%";
});

document.getElementById("wheel").addEventListener("wheel", function () {
    document.getElementById("wheel").style.backgroundColor = "purple";
    document.getElementById("wheel").style.height = "500px";
    document.getElementById("wheel").style.width = "50px";
});

document.getElementById("theGreatDeleter").addEventListener("contextmenu", function () {
    document.getElementById("theGreatDeleter").style.backgroundColor = "crimson";
    document.getElementById("color").style.opacity = "0%";
    document.getElementById("wheel").style.opacity = "0%";
    document.getElementById("greeting").style.opacity = "0%";
    document.getElementById("theGreatDeleter").innerHTML = "MWAAHAHAHAHAHHAHHAHAHHAHHA >:)";
});

document.getElementById("scaredFellow").addEventListener("copy", function () {
    document.getElementById("scaredFellow").style.backgroundColor = "skyblue";
    document.getElementById("scaredFellow").style.height = "60px";
    document.getElementById("scaredFellow").style.width = "60px";
    document.getElementById("scaredFellow").innerHTML = "nah my home :(";
    
});

document.getElementById("squash").addEventListener("", function () {
    document.getElementById("squash").style.backgroundColor = "brown";
    document.getElementById("squash").style.height = "60px";
    document.getElementById("squash").style.width = "700px";
    document.getElementById("squash").innerHTML = "dang";
    
});


