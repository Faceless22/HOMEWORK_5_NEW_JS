"use strict";

/*  1. Написать функцию с названием searchArrayWord и ищет слово в массиве. 
    Она принимает 2 параметра - 
   1) Слово которое нужно найти
   2) Массив в котором находятся элементы со словами. Например ['Кот', 'Собака', 'Жираф' ]
Функция должна вернуть true или false   */

let array = ['Кот', 'Собака', 'Жираф'];
function searchArrayWord(array, world){
    for(let i = 0; i < array.length; i++){
        if(world == array[i])
        return true;
    }
    return false;
}
console.log(searchArrayWord('Кот', array));


/*  Определить среднее арифмитическое чисел из массива.
   var arr = [1, 2, 3, 7, 6, 9];   */

let arr = [1, 2, 3, 7, 6, 9];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
let result = sum / arr.length;
console.log(result);


/*  3. Перевернуть элементы массива задом наперед. Не используя reverse(мы еще не учили его)
   var arr2 = [1, 3, 5, 6, 7, 9];   */

let arr2 = [1, 3, 5, 6, 7, 9];
let i = 0;
let resArr = [];
for(i = arr2.length; i > 0; i--){
let num = arr2.length - i;
resArr[i] = arr2[num];
}
console.log(resArr);


/*  4. Дан объект {html:'HTML', css: 'CSS', js: 'ECMA'}
Нужно получить массив ключей этого объекта и отобразить в консоли.   */

let obj = {
    html: 'HTML', 
    css: 'CSS', 
    js: 'ECMA'
};
console.log(Object.keys(obj));


let obj4 = {
    html: 'HTML', 
    css: 'CSS', 
    js: 'ECMA'
};
for(let key in obj4){
    console.log('Ключ:'+  obj4[key]);
} 


/*  5. Создайте объект описывающий Заказ на сайте.
Создать можно любым из способов - даже просто написать консрукцию var obj = {...}. 
Главное учесть, что единицы измерения обычно не записываются в объект, а 
записываются просто цифры переведенные к общей единице измерения(например кг переводятся в граммы).

В нем должно храниться:
- Имя покупателя
- Телефон покупателя
- Адрес покупателя
- Общая сумма заказа
- Общий вес заказа
- Купленные товары:
1 товар - Чашка \ 100 грн. \ вес 200 грамм
2 товар - Ложка \ 30 грн. \ вес 100 грамм
3 товар - Чайник \ 550 грн. \ вес 2 кг
4 товар - Кружка \ 150 грн \ вес 400 грамм   */

let obj2 = {
    'name' : '',
    'phone' : '',
    'adress' : '',
    'total sum' : '',
    'total weight' : '',
    'purchased goods' : {
        tovar : {
            itemname : 'Чашка',
            price : 100,
            weight : 200
        },
        tovar2 : {
            itemname : 'Ложка',
            price : 30,
            weight : 100
        },
        tovar3 : {
            itemname : 'Чайник',
            price : 550,
            weight : 2000
        },
        tovar4 : {
            itemname : 'Кружка',
            price : 150,
            weight : 400
        }
    }
}
console.log(obj2);
 



































