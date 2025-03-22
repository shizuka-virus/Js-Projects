function pw(x,n){
    let res=1;
    for(let i=1;i<=n;i++){
        res*=x
    }
    console.log(res);
    
}

function pwRec(x,n,i=1,res=1){
    if(i>n){
        return res;
    }
    return pwRec(x,n,i+1,res*x)
}

function secOp(x,n){
    if(n===0){
        return 1;
    }
    return x*secOp(x,n-1);
}

// console.log(secOp(2,5));

function thirdOp(x,n){
    if(n===0){
        return 1;
    }
    if(n<0){
        x=1/x;
        n=-n
    }
    let ans = thirdOp(x,Math.floor(n/2))
    if(n%2!=0){
        return x*ans*ans;
    }
    return ans*ans;
}

console.log(thirdOp(2,5));

// pw(2,5)

// console.log(pwRec(2,5));




