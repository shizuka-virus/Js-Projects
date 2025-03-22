// Q 1 =====> PRINT 1 TO N(ANY NUMBER)
// Q 2 =====> PRINT N(ANY NUMBER) TO 1
// Q 3 =====> PRINT FACTORIAL OF 5
// Q 4 =====> SUM OF TWO NUMBERS
// Q 5 =====> SUM OF ARRAY
// Q 6 =====> LINEAR SEARCH
// Q 7 =====> BINARY SEARCH
// Q 8 =====> CHECK IF NUMBER IS PALINDROME OR NOT
// Q 9 =====> CHECK IF STRING IS PALINDROME OR NOT
// Q 10 =====> DIGONAL SUM WITH RECURSION

// function palindrome(nums,s,e){
//     if(s>=e){
//         return true
//     }
//     if(nums[s] !== nums[e]){
//         return false
//     }
//     return palindrome(nums,s+1,e-1)
// }

// function helper(nums){
//     nums=nums.toString()
//     // nums=nums.split('')
//     return palindrome(nums,0,nums.length-1)
// }
// let num=5432123

// let result=helper(num)

// console.log(result);

// function lastOccur(nums, key, i = 0) {
//   if (i === nums.length) {
//     return -1;
//   }
//   let index = lastOccur(nums, key, i + 1);
//   if (index !== -1) {
//     return index;
//   }
//   if (nums[i] === key) {
//     return i;
//   } else {
//     return -1;
//   }
// }

function lastOccur(nums , target){
    if(nums.length===0){
      return -1;
    }
    if (nums[nums.length-1]===target){
      return nums.length-1
    }
    return lastOccur(nums.slice(0,nums.length-1),target)
  }
  console.log(lastOccur([1, 2, 4, 5, 1, 6, 3, 2, 4, 6, 7], 1));
  