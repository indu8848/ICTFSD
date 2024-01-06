 //print commannd
 console.log('hello'); 
// variables
a=10; //non-declared vvariables
console.log(a);
var a=10; //variable declaration
console.log(a); // value is 10
{
var a=90;
console.log(a); //value is 90,it is local variable
}
console.log(a); //var has aglobal scope, can rresign and redeclare
var a=23;
console.log(a);
let b=24;
console.log(b);
{
let b=23; //let is block scope variable
console.log(b);
} 
console.log(b);
b=45; //let cannot be redeclared(can be reassigned in another block)
console.log(b)
const v=56; //const cannot be redeclared or reassigned, block scope
{
     const v=78;
     console.log(v)
}
console.log(v)
let firstName="jiiya";
let firstname="maya"; //cannot redeclare so use camel cases,js is a case sensitive language
console.log(firstName)
// data types
console.log(typeof(v))
// let firstName='My name is maya'; (this is string data type)
console.log(typeof(firstName))
let isAvailable=true; // boolean
console.log(typeof(isAvailable))
//undefined
var t; 
console.log(typeof(t))
var st=0;
console.log(typeof(st))
//Arrays
let arr1=[1,2,3,4,5]; //the positioning of array starts from 0
console.log(arr1[0]);
let arr2=[1,2,3,4,'indu'] //in java script different data types can be included
console.log(arr2['indu'])
console.log(arr1)
//js objects
let person={
    name:'maya',
    age:32,
    place:'tvm'
    }
    console.log(person.place);
    //use new keyword in JS  (another way of creating an object)
    let car=new Object();
    car.name='hyundai';
    car.model='i10';
    car.color='black';
    console.log(car);
  //Array of objects
  var arr_obj=[{name:'Meera',location:'kochi'},{name:'maya',location:'tvm'}]
  console.log(arr_obj[1].location)
  //operators
  let tr=8;
  console.log(tr+=8);
  let inc=7;
  let inc1=++inc;
  console.log(inc1)
  //conditional statements
  if (inc===inc1) { 
     //we can also use==, === i used to check both data type and the condition(if we give inc1='7', then it will show the values are not equal)
    console.log('the values are equal');
    
  } else {
    console.log('the values arre not equal');
    
  }
  let num1=9;
  let num2=5;
  if (num1==num2) {
    console.log('both sre equal');
    
  } else if (num1>num2) {
    console.log('num1 is greater than num2');
  }
    else {
      console.log('num2 is greater than num1');
    }
//logical operators AND operator
     if ((inc===1)&&(inc==89)) {
      console.log('both values are equal and inc is 89');
     }
     else{
      console.log('values are not equal and inc is not 89');
     }
//logical operator or operator
     if ((inc===1)||(inc==89)) {
      console.log('both values are equal or inc is 89');
     }
     else{
      console.log('conditio check failed');
     }
//precedence
   let ne=90;
   let re=100;
   let x=(re-ne)+(8**2);
   console.log(x);
   // functions
    function addval(ad1,ad2) {
      var sum=ad1+ad2;
      console.log('the calculated sum is'+sum);
    }
    addval(10,20); //function call
    //another method
    function addval(ad1,ad2) {
      var sum=ad1+ad2;
      return sum;
    }
    var result=addval(3,4)
    console.log('the calculated sum is'+result);
    //function for subtraction
    function subval(s1,s2) {
      var sub=s1-s2;
      return sub;
    }
    var result=subval(9,8);
    console.log('the calculated sub is'+result);
   //function for multiplication
   function mult(num1,num2) {
    var sub=num1*num2;
    return sub;
   }
   var result=mult(2,3);
   console.log('the calculated value is'+ result);
   // function for division
   function div(num1,num2){
    var divs=num1/num2;
    return divs;
   }
   var result=div(9,3);
   console.log('the calculated value is'+result);
   //write a program to print the numbers from[1to 10
   for (let i = 0; i < 10;i++) {  //or for(let i=1;i<=10;i++){
   console.log(i+1);//console.log(i)
    
   }
   var arr=['a','b','c','d','e']
   for(i=0;i<arr.length;i++){
   console.log(arr[i]);
   }
   //another method
   var arr5=['apple','orange','grape']
   for (x of arr5) { //you can give any variable instead of x
    console.log(x);
   }
   //for in loop   (mainly used for objects, it iterates over the keys,)
   let person4={name:'hari',age:32,place:'tvm'}
   for(items in person4) {
   console.log(person4[items]); //if we give console.log(items), it will only shows the keys
   }
   //WHILE LOOP
   let j=0; 
   while(j<10){
    console.log(j+1); //if we give j, it will print from 0 to 9
    j++;
    //another method

   }
   let s=1; //we can also give j=1
   while(s<=10){
    console.log(s); 
    s++;

   }
   let array8=[1,2,3,4,5];
   let n=0;
   while(n<array8.length){
    console.log(array8[n]);
    n++;
   }










   













