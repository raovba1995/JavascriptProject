var num=1;

while(num<=10){
    console.log(num);
    num = num+1;
}
console.log("While loop completed");

console.log("Odd numbers between 1 to 20");
var num2=1;
while(num2<=20){
    console.log(num2);
    num2 = num2+2;
}

//=========================================
console.log("Print 1 to 10 using For Loop");

for (var num3 = 1; num3 <= 10; num3++) {
    console.log(num3);
}

//=================================================
console.log("Print all the numbers in array using for each loop")
var arr1=[5,1,2,6,7];
for(var num of arr1){
    console.log(num);
}

//==================================================
console.log("Print all the numbers in array using for loop")
for(var i=0; i<arr1.length;i++){
    console.log(arr1[i]);
}