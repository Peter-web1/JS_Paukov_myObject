//alert('Piter Hi, start js');
// alert(1);
/* alert(2);
 alert(3);
 alert(4);*/

 //var age;// обьявление или создание переменой и типа переменной
 let age;
 //const age = 2;присвоение переменой с идентификатором age литерала "2"
 age = 2;// КЛЮЧЕВАЯ переменная и литерал "2"неизменное не переменная
name = 1;// ГЛОБАЛЬНАЯ переменная
 let a= 2;
 let b = 4;
 
console.log(a+b);//method log

let c=d=3;
a = c;
console.log(a+b);
console.log(c+d);
console.log("a=", a+b,"c+d=",c+d);

//4 Типа Числовых летералов
//1. десятичный, как целое число
//2.десятичный, как применяемое с "."
//=3.0e6; двоичная
//let a = 0o777; восмиричная ES6 ,при установлении прав к доступу файлам в люнекс системах
//let a = 0x9922cc; шестнадцатиричный вид
//let a = 0e1000; -infinity бесконечность и -бесконечность
//let a = NaN; - НЕ число "Not A Number" 
//let a=10; console.log(a / "asd");= NaN

console.log(typeof a)// Проверить тип переменной


//2 string Строка- литерал
let e = "привет";
console.log(e);
console.log(typeof e);
let f ='он сказал "привет" ';
let g ="он \\сказал \"привет\" ";
// \"  "\-экранирование
// \n -перенос на другую строку
// \t - табуляция

console.log(f);

let h =`он сказал ${b} раз привет `;// по ES6 интерполяция , в ES5 конкантинация строка в обратные апострофы и переменная в фигурные скобки
let i ="он сказал " + b +" раз привет ";// по ES5 конкантинация
console.log(h, i);

// булевое значение
let aa =false;

console.log(aa);
console.log(typeof aa);

// Пусто или null = присвоение пустого переменной, некое значение ещё пока не существует, object- непреметивный тип данных
let ab = null;

console.log(ab);
console.log(typeof ab);

// Пусто или undefined = когда не присваеваем значение переменной -тогда узнаем о undefined, то чего не существует, но это не литерал со свойством числовой или строковой
let ac = undefined;

console.log(ac);
console.log(typeof ac);

// Пусто или Symbol = В ES6 используют вместо null
let ad = Symbol(); // уникальный идентификатор

console.log(ad);
console.log(typeof ad);







console.log('---------------ПО АЛЕКСАНДРУ ПАУКОВУ---------------------');
console.log('------------------------------------');
//ЧИСЛА ОКРУГЛЕНИЕ ПЕРЕМЕННЫХ
console.log('ЧИСЛА, ОКРУГЛЕНИЕ ПЕРЕМЕННЫХ');
console.log('------------------------------------');
let myNumber = 10.483;
console.log(40 + myNumber);
console.log(40 - myNumber);
console.log(40 * myNumber);
console.log(40 / myNumber);
console.log('------------------------------------');
//присваивание и увеличение
console.log('присваивание и увеличение');
myNumber--;
console.log(myNumber);
myNumber++;
console.log(myNumber);
myNumber +=40;
console.log(myNumber);
console.log(Math.round(5.9));//обычное округление
console.log(Math.ceil(5.9));//округление в большую сторону
console.log(Math.floor(5.9));//округление в меньшую сторону

console.log('------------------------------------');
console.log('присваивание после запятой один знак');
let newNumber = 2.437;
console.log(newNumber.toFixed(1));//метод toFixed и 1 знак после запятой

console.log('------------------------------------');
console.log('------------------------------------');
//СТРОКИ
console.log('СТРОКИ конкантенация Метод ');
console.log('------------------------------------');
console.log("40 " + e);
console.log(e + " как дела ");
console.log(e.toUpperCase());
console.log(e.toLowerCase());

console.log('------------------------------------');
console.log('------------------------------------');
//МАССИВЫ
console.log('МАССИВЫ');
console.log('------------------------------------');
let names = ["Вася", "Петя","женя"];
console.log(names[2].toUpperCase());
// Изменить значение массива
console.log('Изменить значение массива');
names[2] = "Маша";
console.log(names[2]);
//Добавление в конец массива методом push()
console.log('Добавление в конец массива методом push(');
names.push("Света");
console.log(names[3]);
console.log(names);

console.log('------------------------------------');
console.log('------------------------------------');
//УСЛОВИЯ
console.log('УСЛОВИЯ');
console.log('------------------------------------');
if(10>5){
    console.log("условия выполнилось");//больше
}
if(10>=5){
    console.log("условия выполнилось");//больше равно
}
if(10<=5){
    console.log("условия выполнилось");//меньше равно
}
if(10==5){
    console.log("условия выполнилось");//равно
}
if("10"===5){
    console.log("условия выполнилось");//строгий равно, и значение и типы
}
if("Вася" != "Юля"){
    console.log("условия выполнилось не равно");//не равно
}
if("Вася" !== "Юля" && myNumber < 60){
    console.log("условия выполнилось не равно &&-и");//не равно и
}
if("Вася" !== "Юля" || myNumber < 60){
    console.log("условия выполнилось не равно ||-или");//не равно или
}
if(myNumber < 60) {
    console.log("число меньше 60 не иначе else");
} else {
    console.log("число больше 60 не иначе if");
}

console.log('------------------------------------');
console.log('------------------------------------');
//циклы
console.log('ЦИКЛЫ');
console.log('------------------------------------');
// в for цикле обьявляем переменную назавём её i и проинициализируем ее стартовым значением  =0
//через ; пишем условие i<10
// действие которое изменяло нашу переменную i++

for (let i=0; i < 10; i++){
    console.log(i);
}
console.log('---------------break---------------------');
for (let i=0; i < 10; i++){
    if(i==5) {
        break;//приэтом if условии и брейк прекращение цикла на 5
    }
    console.log(i);
}
console.log('---------------continue итерация(повторения цикла)---------------------');
for (let i=0; i < 10; i++){
    if(i==5) {
        continue;//приэтом if условии и continue итерация(повторения цикла) пропускание когда ровно 5
    }
    console.log(i);
}
console.log('---------------Перебор массива---------------------');
//Перебор массива
//для массива Свойство length- длинна массива
for (let j=0; j < names.length; j++){
    console.log(names[j]);
}
console.log('---------------Цыкл While---------------------');

//обьявляе переменную  - let y=0; -выносится перед цыклом While
//увелечение счётчика в тело цыкла y++;
// АНАЛОГ цыкла FOR

let andry = 0;
while (andry < 10) {
    console.log(i);
    andry++;
}
//избегать бесконечных цыклов, если убрать увелечение счётчика всегда будет 0 0 0 0 0
console.log('------------------------------------');

console.log('------------------------------------');
console.log('------------------------------------');
//ФУНКЦИИ
console.log('ФУНКЦИИ');
console.log('------------------------------------');

function sum(x, y) {
    console.log(x + y);
}

sum(10, 59);
sum(130, 539);
console.log('---------------вычислить значение f и вернуть---------------------');

function summ(x, y) {
    return x + y;
}
// присвоить функцию переменной и вывести в концоль
let result = summ(11, 11);
console.log(result);
//или сразу в концоль
console.log(summ(22, 22));

console.log('------------------------------------');
console.log('------------------------------------');
//ОБЬЕКТЫ
console.log('ОБЬЕКТЫ');
console.log('------------------------------------');

let myObject = {
    name: "вася",
    age: 25
};

// можно свойства менять
myObject.name = "петя"
console.log(myObject.name);
console.log('--------------возращение через метод----------------------');
let myObject1 = {
    name: "вася",
    surname: "Васин",
    age: 25,
    getFullName: function() {
        return this.name + " " + this.surname;
    }
};

// можно свойства менять
myObject1.name = "петя"
console.log(myObject1.name);
console.log(myObject1.getFullName());