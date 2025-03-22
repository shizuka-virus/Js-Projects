function linearSearch(nums,target){
    for (let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i;
        }
    }
    return -1;
}
let nums=[1,6,8,2,5,8,1,45,76,23,45,0]
let target=8;
let index=linearSearch(nums,target) // -1 /  any number

// console.log(index);

if(index===-1){
    console.log('Not Found');    
} else {
    console.log('Element Found at:'+index);    
}

