let blue= document.querySelector('.blue');
let white= document.querySelector('.white');
let black= document.querySelector('.black');
console.log(blue);
blue.addEventListener('click',function(){
    document.getElementById('blue').style.display='block'
    document.getElementById('black').style.display='none'
})
white.addEventListener('click',function(){
    document.getElementById('white').style.display='block'
    document.getElementById('black').style.display='none'
    document.getElementById('blue').style.display='none'
})
black.addEventListener('click',function(){
    document.getElementById('white').style.display='none'
    document.getElementById('black').style.display='block'
    document.getElementById('blue').style.display='none'
})
