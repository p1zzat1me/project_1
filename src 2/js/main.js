let button = document.getElementById('start'),
budgetVal=document.getElementsByClassName('budget-value')[0],
daybudgetVal = document.getElementsByClassName('daybudget-value')[0],
levelVal = document.getElementsByClassName('level-value')[0],
expVal = document.getElementsByClassName('expenses-value')[0],
optExpVal = document.getElementsByClassName('optionalexpenses-value')[0],
incVal = document.getElementsByClassName('income-value')[0],
monthVal = document.getElementsByClassName('monthsavings-value')[0],
yearSavVal = document.getElementsByClassName('yearsavings-value')[0],
nameExp =  document.getElementsByClassName('expenses-item'),
butConfOne = document.getElementsByTagName('button')[0],
butConfTwo = document.getElementsByTagName('button')[1],
butCount = document.getElementsByTagName('button')[2],
optExpItems = document.querySelectorAll('.optionalexpenses-item'),
chooseIncome = document.querySelector('.choose-income'),
checkBox = document.querySelector('#savings'),
sumExp = document.querySelector('.choose-sum'),
percentage = document.querySelector('.choose-percent'),
year = document.querySelector('.year-value'),
month = document.querySelector('.month-value'),
day = document.querySelector('.day-value');
var money,time;

butConfOne.disabled = true;
butConfTwo.disabled =true;
butCount.disabled = true;

button.addEventListener('click',function(){
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
  
    while(isNaN(money) || money == '' || money == null){
      money = +prompt("Ваш бюджет на месяц?",'');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();
    butConfOne.disabled = false;
butConfTwo.disabled =false;
butCount.disabled = false;
  });
 

butConfOne.addEventListener('click',function(){
let sum = 0;
for (let i = 0; i < nameExp.length;i++){
  var a = nameExp[i].value;
  var b = nameExp[++i].value;
    if ((typeof(a)) === 'string' && (typeof(a)!= null && (typeof(b)!= null)
    && a!= '' && b!= '' && a.length < 50)) {
      appData.expenses[a] = b;  
      sum += +b;
  }else{
     i--;
  }
  }
  expVal.textContent = sum;
});

butConfTwo.addEventListener('click',function(){
  for (i=0;i<optExpItems.length;i++){
    var c = optExpItems[i].value;
    appData.optionalExpenses[i] = c;
optExpVal.textContent += appData.optionalExpenses[i] + ' ';

  }
});


butCount.addEventListener('click',function(){
  if (appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget- Number(expVal.textContent))/30).toFixed();//toFixed returns string
    daybudgetVal.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100){
      levelVal.textContent ="Минимальный уровень достатка";
      
  }else if(appData.moneyPerDay > 100 & appData.moneyPerDay < 2000){
      levelVal.textContent ='Средний уровень достатка';
  }else if(appData.moneyPerDay > 2000){
      levelVal.textContent ='Высокий уровень достатка';
  } else {
      levelVal.textContent ='Произошла ошибка';
  }
  }else{
    daybudgetVal.textContent = 'Произошла ошибка';
  }
});


chooseIncome.addEventListener('input',function(){
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incVal.textContent = appData.income;
});



checkBox.addEventListener('click', function(){
if (appData.savings == true){
  appData.savings = false;
}else{
  appData.savings = true;
}
});

sumExp.addEventListener('input',function(){
if (appData.savings == true){
let sum = +sumExp.value,
percent = +percentage.value;
appData.monthIncome = sum/100/12*percent;
appData.yearIncome = sum/100*percent;

monthVal.textContent = appData.monthIncome.toFixed(1);
yearSavVal.textContent = appData.yearIncome.toFixed(1);
}
});


percentage.addEventListener('input',function(){
  if (appData.savings == true){
    let sum = +sumExp.value,
percent = +percentage.value;
appData.monthIncome = sum/100/12*percent;
appData.yearIncome = sum/100*percent;

monthVal.textContent = appData.monthIncome.toFixed(1);
yearSavVal.textContent = appData.yearIncome.toFixed(1);
  }
  });
  


let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
  };
  // чета не то appData.income.forEach(items => alert("способы доп заработка: " + (Number(appData.income.indexOf(appData.income.items))++) + ") " + items));
  // for(let key in appData.income){
  //   alert("способы доп заработка: " + key + ") " + appData.income[key]);
  // }
// while((!/^[а-яА-Я, ]+$/.test(items))||items==''||items==null){
//   items = prompt("что принесет доп доход? (перечислите через запятую)",'');
// }
// function allProps(){
// for(let key in appData){
//   alert("Our programm includes: " +  appData[key] + '-'+ key)
// }
// };
// allProps();

/*let ind = 0;
while (ind < 2){
    var a = prompt("Введите обязательную статью расходов в этом месяце",'');
    var b = prompt("Во сколько обойдется?",'');
      if ((typeof(a))=== 'string' && (typeof(a)!== 'null' && (typeof(b)!== 'null')
      && a!= '' && b!= '' && a.length < 50)) {
        console.log("done");
        appData.expenses[a] = b;
      }else{
       i = -1;
     }
}
do {
    var a = prompt("Введите обязательную статью расходов в этом месяце",'');
    var b = prompt("Во сколько обойдется?",'');
      if ((typeof(a))=== 'string' && (typeof(a)!== 'null' && (typeof(b)!== 'null')
      && a!= '' && b!= '' && a.length < 50)) {
        console.log("done");
        appData.expenses[a] = b;
      }else{
       i = -1;
     }
}while (ind < 2);*/
