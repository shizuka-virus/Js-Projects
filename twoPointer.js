function twoPointer(nums,target){
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        if(nums[left]+nums[right]>target){
            right--;
        } else if(nums[left]+nums[right]<target){
            left++
        } else if(nums[left]+nums[right]===target){
            return [left,right]
        }
    }
    return [];
}

nums = [1, 2, 3, 4, 6]  
target = 6  

let res=twoPointer(nums,target)
console.log(res);


nums = [2, 3, 5, 8, 11]  
target = 10  

res=twoPointer(nums,target)
console.log(res);
