function spiralMatrix(nums){
    let colStart=0;
    let rowStart=0;
    let colend=nums[0].length-1;
    let rowend=nums.length-1;
    let spiral=[]
    while(colStart<=colend && rowStart<=rowend){
        // top
        for(let i=colStart;i<=colend;i++){
            spiral.push(nums[rowStart][i])
        }

        // right
        for(let i=rowStart+1;i<=rowend;i++){
            spiral.push(nums[i][colend])
        }
        // buttom
        for(let i=colend-1;i>=0;i--){
            if(rowend === rowStart){
                break
            }
            spiral.push(nums[rowend][i])
        }
        // left
        for(let i=rowend-1;i>=rowStart+1;i--){
            if(colStart === colend){
                break
            }
            spiral.push(nums[i][colStart])
        }
        colStart++
        rowStart++
        colend--
        rowend--
    }

    return spiral

}

let nums=[
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
]

let result=spiralMatrix(nums)

console.log(result);
