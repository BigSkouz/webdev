function fnafQuiz () {
    let name = document.getElementById("name").value;
    let character = document.getElementById("character").value;

    document.getElementById("submitMessage").innerHTML = `Hello ${name}, thank you for submitting the quiz. Also ${character} is the silliest character (imagine)`;
}
