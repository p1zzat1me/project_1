let money = prompt("Ваш бюджет на месяц?",'');
let time = prompt("Введите дату в формате YYYY-MM-DD",'');
let appData = {
    budget: money,
    timeData: time,
    expenses:{
        questionOne:questionTwo,
        questionThree:questionFour
    },
    optionalExpenses:{},
    income:[],
    savings:false
};
let questionOne = prompt("Введите обязательную статью расходов в этом месяце",'');
var questionTwo = prompt("Во сколько обойдется?",'');
let questionThree = prompt("Введите обязательную статью расходов в этом месяце",'');
var questionFour = prompt("Во сколько обойдется?",'');
alert(money/30);
