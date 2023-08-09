let list=document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');

}
list.forEach((i)=>
i.addEventListener('click',active));

let menutoggle=document.querySelector('.menutoggle');
let header= document.qyerySelector('header');
menutoggle.onclick=function(){
    header.classList.toggle('active');

}














