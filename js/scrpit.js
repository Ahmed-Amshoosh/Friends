const selcet =document.querySelector('.selcet');
const selcetContent =document.querySelector('.selcet-content');

selcet.onmouseover=function(){
    selcetContent.style.display='block';
}
selcet.onmouseout=function(){
    selcetContent.style.display='none';
}


//********* */


const iconuser =document.querySelector('.iconuser');
const contentUser =document.querySelector('.user');

iconuser.onmouseover=function(){
    contentUser.style.display='block';
}
iconuser.onmouseout=function(){
    contentUser.style.display='none';
}



/********************************/

const iconhaert =document.querySelector('.haerticon');
const haerts =document.querySelector('.haerts');

iconhaert.onmouseover=function(){
    haerts.style.display='block';
}
iconhaert.onmouseout=function(){
    haerts.style.display='none';
}

const menu =document.querySelector('#menu');
const nav =document.querySelector('#nav');
const close =document.querySelector('#close');

menu.onclick=function(){
  nav.style.left='0px';
}
close.onclick=function(){
  nav.style.left='-250px';
}




