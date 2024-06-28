let str = "";
document.querySelector('.btn1a').addEventListener('click',()=>{
    str += '1';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1b').addEventListener('click',()=>{
    str += '2';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1c').addEventListener('click',()=>{
    str += '3';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1d').addEventListener('click',()=>{
    str += '4';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1e').addEventListener('click',()=>{
    str += '5';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1f').addEventListener('click',()=>{
    str += '6';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1g').addEventListener('click',()=>{
    str += '7';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1h').addEventListener('click',()=>{
    str += '8';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1i').addEventListener('click',()=>{
    str += '9';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn1j').addEventListener('click',()=>{
    str += '0';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn2ac').addEventListener('click',()=>{
    str = "";
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn2cc').addEventListener('click',()=>{
    str = str.substring(0,str.length-1);
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn2a').addEventListener('click',()=>{
    str += '+';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn2b').addEventListener('click',()=>{
    str += '-';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn2c').addEventListener('click',()=>{
    str += '*';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn2d').addEventListener('click',()=>{
    str += '/';
    document.querySelector('.display').innerHTML = str;
})
document.querySelector('.btn2f').addEventListener('click',()=>{
    str += '.';
    document.querySelector('.display').innerHTML = str;
})

document.querySelector('.btn2e').addEventListener('click',()=>{
    try {
        str = eval(str).toString();
    } catch (e) {
        str = "Error";
    }
    document.querySelector('.display').innerHTML = str;
});

