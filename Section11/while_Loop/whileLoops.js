//Prints all numbers between -10 and 19
console.log("Numbers from -10 to 19");
var count = -10;
while(count < 20)
{
    console.log(count);
    count++;

}

//Prints all even numbers between 10 and 40
console.log("All even numbers between 10 and  40");
var num = 10;

while(num <= 40)
{
    console.log(num);
    num+= 2;
}

//Prints all odd numbers between 300 and 333
console.log("All odd numbers between 300 and 333");
var num = 300;

while(num <= 333)
{
    console.log(num + 1 );
    num +=2;
}
/*while(num <= 333)
{
    if(num % 2 !==0)
    {
        console.log("num");
    }
    num += 1;
}*/

//Prints all numbers divisble by 5 and 3 between 5 and 50
console.log("Divisble by 5 AND 3 between 5 and 50");
var num = 5;

while(num <= 50)
{
    if(num % 5 === 0 && num % 3 === 0)
    {
        console.log(num);
    }
    num +=1;
}
   
