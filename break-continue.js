const numbers = [13 ,24 ,32 ,36 ,40 ,5, 90, 80, 100, 70];
//((break))
// for(let number of numbers){
//     console.log(number);
//     if(number ===5){
//         break;
//     }
// }

//((continue))
// for(let number of numbers){
//     if(number ===5){
//         continue;
//     }
//     console.log(number);
// } 

// /((jodi jor ber korte cai))
for(let number of numbers){
    if(number%2===1){
        continue;
    }
    console.log(number);
}

 