
if (num < 49) {
  console.log("Неверно");
} else if (num > 100) {
  console.log("много");
} else {
  console.log("верно!");
}

num == 50 ? console.log("true") : console.log("false");

switch (num) {
  case num < 49:
    console.log("Неверно");
    break;
  case num > 100:
    console.log("много");
    break;
  case num > 80:
    console.log("еще много");
    break;
  case 50:
    console.log("верно");
    break;
    default:
    console.log("wrong");
    break;
}

var num = 50;
/*while (num < 55){
    console.log(num);
    num++;
}*/

do {
    console.log(num);
    num++;
}
while(num<55);

for(let i = 1;i < 8; i++){
    if(i==6){
        continue;
    }
    console.log(i);
}