function lastOccurence(nums,target){
    let index=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            index=i;
        }
    }
    return index;
}

let nums = [1,2,3,4,5,1,3,4,5,6]

let result = lastOccurence(nums,1)

console.log(result);

