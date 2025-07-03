function welcomeMessage()
{
    console.log("Welcome to MRECW");
}
function add(a,b)
{
    return a+b;
}
welcomeMessage();
console.log(add(10,5));
const mul=(a,b)=>(a*b);//arrow function in single step
const wel=()=>("HEY GUYSSS");//arrow function without parameters
console.log(wel());
console.log(mul(2,3));
const oddOReven=(no)=>{//using arrow function
    if (no%2==0)
        console.log("even");
    else
    console.log("odd");
}
oddOReven(15);
function oddoreven(no)//traditional code
{
    if(no%2==0)
        console.log("even");
    else
    console.log("odd");
}
oddoreven(10);