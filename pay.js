let send=document.querySelector('.send');
let ad= document.getElementById('ad')
let mail= document.getElementById('mail')
let info=document.querySelector('.infoType')
console.log(mail.value);
send.addEventListener('click',function(event){
    event.preventDefault();
 let ul= document.createElement('ul')
 let adli= document.createElement('li');
 adli.appendChild(ad.value)
 ul.appendChild(adli)
 document.querySelector('.infoType').appendChild(ul)
})