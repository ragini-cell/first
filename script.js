//console.log("we are in w3school lets discuss about Arrays");
//const marks1 = [34,25,12,54,];
//const fruits = ['orange','apple',"lichi",'grapes'];
//const mixed = [12,35,"string",'apple',[2,5]];


//const arr = new Array(23,14,125,'orange');

//console.log(arr[2]);
//console.log(mixed[3]);


//arr[0] = 'ragini';
//console.log(arr);

//operators javascripts
//Assigment operators
var a = 34;
var b = 25;
console.log("There value of a + b is ", a + b);
console.log("There value of a - b is ", a - b);
console.log("There value of a * b is ", a * b);
console.log("There value of a / b is ", a / b);

//Assiment operators
var c = b;
c /= 2;
console.log(c);

//comparision operators
/*var a = 23;
var b = 26;
console.log(a==b);
console.log(a<=b);
console.log(a>=b);
console.log(a<b);
console.log(a>b);*/

//logical operators AND
/*console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Logical OR operators
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
*/

//Logical NOT operators
console.log(!true)
console.log(!false)

function avg(a, b) {
    c = (a + b) / 2
    return c;
}
// DRY = do not repeat yourself
c1 = avg(6, 4);
c2 = avg(15, 25);
console.log(c1, c2);


/*function sgp(x, y){
   z = (x+y)*2;
   return z;
}

b1 = sgp (2,4);
b2 = sgp(3,2);
console.log(b1,b2);*/

/*var age = 14;
// single if statement
if (age > 18) {
    console.log("You can drink wine");
}
//if-else statement
var age = 14;
if (age > 18);
else {
    console.log("you can not drink wine");
}*/
//var arr = [1, 2, 3, 4, 8, 10];
//console.log(arr);
//for (var i=0;i<arr.length;i++){
  //  if(i==2){
    //    break
    //}
    //console.log(arr[i]);
//}

//arr.forEach(function(Element){
//     console.log(Element);
//})
 var myarr = [1,2,3,4,5,6,7];
  console.log(myarr);
for (var i=0;i<myarr.length;i++){
     if(i==2){
     //break
     continue;   
    }
    console.log(myarr[i]);
}






