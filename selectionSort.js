function selectionSort(nums){
    for(let i=0;i<nums.length;i++){ 
    let minIndex=i;
    for(let j=i+1;j<nums.length;j++){
     if(nums[j]<nums[minIndex]){
         minIndex=j;
     }
    }
    let temp=nums[i]
    nums[i]=nums[minIndex]
    nums[minIndex]=temp
 }
     return nums
 }
 
 let nums=[4,5,6,8,2,1,9];
 
 let sortedArray=selectionSort(nums)
 
 console.log(sortedArray);
 