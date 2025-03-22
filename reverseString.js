// function reverseString(str){
//     let str2=""
//     for(let i=str.length-1;i>=0;i--){
//         str2+=str[i];      
//     }
//     console.log(str2);
    
// }
function reverseString(str){
    let s2=s.toLowerCase().replace(/[^a-z0-9]/g,"");
    s3=s2.split('').reverse().join('');
    if(s2===s3){
    return true;
    } 
    return false;
     
    
 }
 reverseString("racecar")