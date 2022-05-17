var one=document.getElementById("btn1");
var zero=document.getElementById("btn0");
var clr=document.getElementById("btnClr");
var eql=document.getElementById("btnEql");
var add=document.getElementById("btnSum");
var sub=document.getElementById("btnSub");
var mul=document.getElementById("btnMul");
var div=document.getElementById("btnDiv");
var res=document.getElementById("res");
var result="";
var operand1,operand2,operator;
var printOne=()=>{
    result=result+"1";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
    };
one.onclick=()=>{printOne()};
var printZero=()=>{
    result+="0";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
zero.onclick=()=>{printZero()};
var clrScreen=()=>{
    result="";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
clr.onclick=()=>{clrScreen()};
var addScreen=()=>{
    result+="+";
    operator="+";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
add.onclick=()=>{addScreen()};
var subScreen=()=>{
    result+="-";
    operator="-";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
sub.onclick=()=>{subScreen()};
var mulScreen=()=>{
    result+="*";
    operator="*";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
mul.onclick=()=>{mulScreen()};
divScreen=()=>{
    operator="/";
    result+="/";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
div.onclick=()=>{divScreen()};
function deciToBin(n)
{
    let ans="";
    n=Number(n);
    while(n)
    {
        if(n&1)
        {
            ans+="1";
            n=(n-1)/2;
        }
        else
        {
            ans+="0";
            n/=2;
        }
    }
    return (ans.split('').reverse().join(''));
}
var eqlScreen=()=>{
    let [a,b]=result.split(operator);
    //let [a,b]=result.split(/[*-/+]/);
    operand1=a;
    operand2=b;
    result=String(parseInt(operand1,2));
    result+=operator;
    result+=String(parseInt(operand2,2));
    result=Math.floor(Number(eval(result)));
    if(result>0)
    result=deciToBin(Math.floor(Number(eval(result))));
    else if(result == 0)
    result=0;
    else result=NaN;
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
eql.onclick=()=>{eqlScreen()};

document.addEventListener("keyup", function(event) {
    if (event.which === 48 || event.which === 96) {
        printZero();
    }
    if (event.which === 49 || event.which === 97) {
        printOne();
    }
    if (event.which === 8) {
        clrScreen();
    }
    if (event.which === 106 )
    {
        mulScreen();
    }
    if (event.which === 13 || event.which === 187) {
        eqlScreen();
    }
    if (event.which === 191 || event.which === 111) {
        divScreen();
    }
    if (event.which === 107) {
        addScreen();
    }
    if (event.which === 109 || event.which === 189) {
        subScreen();
    }
});