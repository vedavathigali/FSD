var arr;
arr = [];
arr[0] = 10;
arr[1] = 2;
console.log("length of array :" + arr.length);
console.log(arr[0]);
console.log(arr[1]);
var val = [
    {
        id: 1
    },
    {
        id: 2
    }
];
console.log(val[0]);
var numbers = [2, 3, 10, 9, 8];
var index;
var min = numbers[0];
var i;
var j;
//finding maximum value in an array
for (index = 1; index < numbers.length; index++) {
    if (min < numbers[index]) {
        min = numbers[index];
    }
}
console.log('Largest is ', min);
for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            numbers[i] = numbers[i] + numbers[j];
            numbers[j] = numbers[i] - numbers[j];
            numbers[i] = numbers[i] - numbers[j];
        }
    }
}
for (var n = 0; n < numbers.length; n++) {
    console.log(numbers[n]);
}
//petfect square root
var arr1;
arr1 = [];
var k = 0;
for (var i_1 = 0; i_1 <= numbers.length; i_1++) {
    for (var j_1 = 0; j_1 <= numbers.length; j_1++) {
        if (j_1 * j_1 == numbers[i_1]) {
            arr1[k] = j_1;
        }
    }
}
console.log(arr1);
