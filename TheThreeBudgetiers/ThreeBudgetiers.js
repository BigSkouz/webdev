function makeBudget () {

    let income = document.getElementById("incomeInput").value;
    let expenseOne = document.getElementById("expenseInput").value;
    let expenseTwo = document.getElementById("expenseInput2").value;
    let expenseThree = document.getElementById("expenseInput3").value;
    let expenseFour = document.getElementById("expenseInput4").value;
    let expenseFive = document.getElementById("expenseInput5").value;
    let expenseSix = document.getElementById("expenseInput6").value;

    let finalMoney = income - expenseOne - expenseTwo - expenseThree - expenseFour - expenseFive - expenseSix;
    document.getElementById("MunsRemaining").innerHTML = `You have ${finalMoney} dollars remaining.`

    if(finalMoney >= 1000){
        document.getElementById("advice1").innerHTML = `You are pretty epic at not spending your life savings :)`;
    }
}