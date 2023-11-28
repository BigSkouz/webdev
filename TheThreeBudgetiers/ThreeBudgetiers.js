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
        document.getElementById("advice2").innerHTML = `You should probably invest in businesses for more (my email is below)`;
        document.getElementById("advice3").innerHTML = `Charity would like your help (my email is below (for a good cause(really good cause)))`;
    } else if( 1000 > finalMoney >= 100 ){
        document.getElementById("advice1").innerHTML = `Spend less (or make more)`;
        document.getElementById("advice2").innerHTML = `Have less monsters (they are very expensive (noah would know))`;
        document.getElementById("advice3").innerHTML = `Find the ancient technique known as "alternative income"`;
    } else if ( -300 <= finalMoney && finalMoney < 100){
        document.getElementById("advice1").innerHTML = `Uh oh, You need money fast, get better job (not easy, but necessary)`;
        document.getElementById("advice2").innerHTML = `Remove thine debt (no use credit cards)`;
        document.getElementById("advice3").innerHTML = `Go on an ancient treasure hunt to find the ONE PIECE (infinite money glitch according to braxton)`;
    } else if(finalMoney < -300){
        document.getElementById("advice1").innerHTML = `Are you currently living??????`;
        document.getElementById("advice2").innerHTML = `Read Le Mes (bread stealing tutorial)`;
        document.getElementById("advice3").innerHTML = `Find the two piece (twice as much infinite money)`;
    }
}

document.getElementById("button").addEventListener("click", function(){
    document.getElementById("body").style.backgroundColor = "lightpink";
})