function lastOccurence(nums,target){
    if(nums.length===0){
        return -1;
    }
    if(nums[nums.length-1]===target){
        return nums.length-1;
    }

    return lastOccurence(nums.splice(0,nums.length-1),target)
}

let nums=[1,2,3,4,5,2,3,4,5]

let result = lastOccurence(nums,2)

console.log(result);
