

function sol(arr){
    let str=arr.join('');
    let nmb=BigInt(str)
    nmb=nmb+1;
    let str2=String(nmb)
    let rest=Array.from(str2)       
    let res=rest.map(e=>Number(e));
    console.log(res);
}



let arr=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
sol(arr);