'use strict'

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}
const compareArrays = (arr1, arr2) => {

    function getArr(currentValue, index, array) {
        return (currentValue === arr2[index])
    }
    if (arr1.length === arr2.length) {

        return arr1.every(getArr);
    } else return false;

}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
    let memory = [];
    let sumresult;
    for (let i in memory) {
        if (compareArrays([...rest], memory[i].args)) { //сравниваем новые параметры с исходными
            return memory[i].result
        }
    }
    memory.push({ // если параметры новые, добавляем в мемори 
        args: [...rest],
        result: fn(...rest)
    });
    if (memory.length > limit) { //очищаем 
        memory.splice(0, 1);
    }
    console.log(memory);
    return fn(...rest)
}

const mSum = memorize(sum, 5);
// console.log(sum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(3, 6));
console.log(mSum(3, 4));

function testCase(testFunction, valueTime) {
    let arr = [
        [1, 2, 3],
        [1, 2],
        [1, 2, 3],
        [1, 2],
        [9, 5, 2, 4]
    ];
    console.time(valueTime);
    for (let i = 0; i < 10; i++) {
        arr.forEach(testFunction) * i;
    }
    console.timeEnd(valueTime);
}
testCase(sum);
testCase(mSum);

// const compareArrays = (arr1, arr2) => {
//     if (arr1.length === arr2.length) {

//         return arr1.every(let getArr = (currentValue, index) => {currentValue === arr2[index]});
//     } else return false;


// }


// function memorize(fn, limit) {
//     let memory = [];
//     return function (a, b, ...rest) {
//         if (memory.length < 1) { //Заполянем массив мемори исходными данными
//             memory.push({
//                 args: [a, b, ...rest],
//                 result: fn(a, b, ...rest)
//             });
//             // console.log(memory)
//             return fn(a, b, ...rest) //выводим результат вычисления
//         } else {
//             for (let i in memory) {
//                 if (compareArrays([a, b, ...rest], memory[i].args)) { //сравниваем новые параметры с исходными
//                     // console.log('repeat ' + memory[i].result);
//                     return memory[i].result
//                 }
//             }
//             memory.push({ // если параметры новые, добавляем в мемори 
//                 args: [a, b, ...rest],
//                 result: fn(a, b, ...rest)
//             });
//             if (memory.length > limit) { //очищаем 
//                 memory.splice(0, 1);
//                 console.log(memory.slice(0, 1));
//             }
//             console.log(memory);
//             return fn(a, b, ...rest)
//         }
//     }
// }