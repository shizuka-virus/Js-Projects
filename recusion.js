function BinarySearch(nums,target,left=0,right=nums.length-1){
    if(left>right){
        return -1;
    }
    let mid=Math.floor((left+right)/2)
    if(nums[mid]>target){
            return BinarySearch(nums,target,left,right=mid-1);
        }
    else if(nums[mid]<target){
        return BinarySearch(nums,target,left=mid+1,right)
    } else if (nums[mid]===target){
        return mid;
    }
}

let res=BinarySearch([1,2,3,4,5,6,7,8],10)

console.log(res);




// linear search with recursion //  10 time
// factorial loop and reursion 