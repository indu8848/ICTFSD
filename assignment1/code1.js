function getFirstElement(arr) {
    if (arr.length>0) {
        return arr[0];
     }
    else{
        return 'no elements in the array';
     }
}
let myarray=[33,34,35,36,37,38,39,40];
var firstElement = getFirstElement(myarray); // Function Call
console.log('First elememt is '+firstElement);
if (firstElement<=1){
    console.log('firstElement is not a prime number');
}else{
        let isPrime=true;
        for (let i = 2; i < firstElement; i++) {
            if(firstElement % i ===0) {
                isPrime=false;
                break;
            }
            
        }
    if(isPrime) {
        console.log('firstElement is a prime number')
        
        }
        else{
            console.log('fistElement is not a prime number');
        }
        }