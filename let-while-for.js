// while....

// let i = 1;
// while(i<5){
//     console.log('raju');
//     i++;
// }




// //for..............
// for(let i = 1; i<=5; i++){
//     console.log('jh', i);
     
// }


//..........................................................
// const nums = [21, 16, 17, 18, 26, 78, 96];
// for(let i = 0; i<nums.length; i++){
//     console.log(nums[i]);
// }


//..........................................................
const nums = [21, 16, 17, 18, 26, 78, 96];

let sumOfOdd = 0;
let sumOfEven = 0;

for(let i = 0; i <nums.length; i++){
    const num = nums[i];  //number of numbers 

    if(num%2===1){
        sumOfOdd += num;
    }
    else{
        sumOfEven += num;
    }
}

console.log(sumOfOdd);
console.log(sumOfEven);


//for of...............
for(let num of nums){
    console.log(num);
}

//Do while..............
let i = 5
do{
    console.log(i);
    i++;
} while(i>10);