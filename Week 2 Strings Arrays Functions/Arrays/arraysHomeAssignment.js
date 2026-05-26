// All 9 methods: push, pop, shift, unshift, includes, indexOf, join, reverse, sort

let arr = ['Jan','Feb','Mar', ,'Apr','May'];
//push() - Add element to the end of array
arr.push('June');
console.log(arr);

//pop() - remeove element from end of array
arr.pop();
console.log(arr);

//shift - remove first element
arr.shift();
console.log(arr)

//unshift - add element to the beginning
arr.unshift(2026);
console.log(arr);

//includes - check if item exists inside array
let result1 = arr.includes('Oct');
console.log(result1);

//indexOf - find the position of an item in an array
let result2 = arr.indexOf('Apr');
console.log(result2);

//join() - combines all array items into single text/string
let result3 = arr.join(",");
console.log(result3);

//reverse - changes order of array items backwards
arr.reverse();
console.log(arr);

//sort - arranges array items in alphabetical order
arr.sort();
console.log(arr);

