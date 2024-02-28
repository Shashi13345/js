const countvalue=document.querySelector('#counter');

// const increment=()=>{

function increment(){

    let value=parseInt(countvalue.innerText);
    value=value+1;
    countvalue.innerText=value;
};

// const decrement=() =>{

function decrement()
{
    let value=parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText=value;
};
