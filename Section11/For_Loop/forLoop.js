console.log("All numbers between -10 and 19");
for(i = -10; i <= 19; i++)
{
    console.log(i);
}

console.log("All even numbers between 10 and 40");
for(i = 10; i <= 40; i += 1)
{
    if( i % 2 === 0)
    {
        console.log(i);
    }
}

console.log("All odd numbers between 300 and 333");
for(i = 300; i <= 333; i++)
{
    if(i % 2 !== 0)
    {
        console.log(i);
    }

}

