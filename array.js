const arr = [1, 3, 31, 3, 'djaf'];
// const arr2 = new Array();
// console.log(arr[0]);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

console.log(arr.join('|'));

// arr.push(1000);
// arr.unshift('000');

// arr.pop();
// arr.shift();

// console.log(arr.join('|'));

arr.splice(3, 0, 51, 52);
console.log(arr.join('|'));
