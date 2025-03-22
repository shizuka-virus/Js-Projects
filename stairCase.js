function stairCase(matrix,target){
    let col=matrix[0].length-1;
    let row=0;
    while(col>=0 && row<matrix.length){
        if(matrix[row][col]>target){
            col--
        } else if(matrix[row][col]<target){
            row++
        } else if(matrix[row][col]===target){
            return true;
        }
    }
    return false;
}