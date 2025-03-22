// function bubbleSort(nums,i=0){
//     if(i===nums.length){
//         return nums;
//     }
//     for(let j=0;j<nums.length-i-1;j++){
//         if(nums[j]>nums[j+1]){
//             let temp=nums[j]
//             nums[j]=nums[j+1]
//             nums[j+1]=temp
//         }
//     }
//     return bubbleSort(nums,i+1);
// }

// let result=bubbleSort([1,6,4,2,8,9,2,4,7,1,0])

// console.log(result);


// function feb(n){
//     let a=0; 
//     let b=1;
//     for(let i=0;i<=n-2;i++){
//         let temp=b;
//         b=a+b;
//         a=temp;
//     }
//     return b;

// }

// let res= feb(6)
// console.log(res);


function feb(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    let feb1=feb(n-1);
    let feb2=feb(n-2);
    return feb1+feb2
}

let result=feb(8)

console.log(result);

// Q11  ======> Bubble Sort with recursion 
// Q12 ======> fibanachi series 