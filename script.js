var money,time;
function start(){
  money = +prompt("Ваш бюджет на месяц?",'');
  time = prompt("Введите дату в формате YYYY-MM-DD",'');

  while(isNaN(money) || money == '' || money == null){
    money = +prompt("Ваш бюджет на месяц?",'');
  }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses:{
        
    },
    optionalExpenses:{},
    income:[],
    savings:true,
    chooseExpenses: function(){
      for (let i = 0; i < 2;i++){
        var a = prompt("Введите обязательную статью расходов в этом месяце",'');
        var b = prompt("Во сколько обойдется?",'');
          if ((typeof(a)) === 'string' && (typeof(a)!= null && (typeof(b)!= null)
          && a!= '' && b!= '' && a.length < 50)) {
            console.log("done");
            appData.expenses[a] = b;
          }else{
           i--;
        }
        }
    },
    detectDayBudget:function (){
      appData.moneyPerDay = (appData.budget/30).toFixed(1);//toFixed returns string
alert("Ежедневный бюджет : " + appData.moneyPerDay);
    },
    detectLevel: function(){
      if (appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка");
        
    }else if(appData.moneyPerDay > 100 & appData.moneyPerDay < 2000){
        console.log('Средний уровень достатка');
    }else if(appData.moneyPerDay > 2000){
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
    },
    checkSavings:function(){
      if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
      }
    },
chooseOptExpenses:function(){
  for (i=0;i<3;i++){
    var c = prompt("Введите необязательную статью расходов в этом месяце или оставьте пустым",'');
    var d = prompt("Введите сумму доп трат или оставьте пустым");
     if(typeof(c) === 'string'  && d != null && c != null && c.length < 20){
console.log("done for optexpense");
appData.optionalExpenses [c] = d;
     }else{
      break;
     }  
  }
},
chooseIncome:function(){
  let items = prompt("что принесет доп доход? (перечислите через запятую)",'');
  appData.income = items.split(', ');
  appData.income.push(prompt('Может что-то еще?'));
  appData.income.sort();
  while((!/^[а-яА-Я, ]+$/.test(items))||items==''||items==null){
    items = prompt("что принесет доп доход? (перечислите через запятую)",'');
  }
  appData.income.forEach(function(items,i){
    alert("способы доп заработка: " + (i+1) + ") " + items);
    });
  // чета не то appData.income.forEach(items => alert("способы доп заработка: " + (Number(appData.income.indexOf(appData.income.items))++) + ") " + items));
  // for(let key in appData.income){
  //   alert("способы доп заработка: " + key + ") " + appData.income[key]);
  // }
  }
};
function allProps(){
for(let key in appData){
  alert("Our programm includes: " +  appData[key] + '-'+ key)
}
};
allProps();

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
