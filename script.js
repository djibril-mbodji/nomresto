const btn = document.querySelector('#toggle-btn');
const nav = document.querySelector('#ulref');
btn.addEventListener('click',function(){
   if(nav.style.opacity == 0){
    nav.style.opacity = 1;
   }else{
    nav.style.opacity = 0;
   }  
});
// ************le carrousel des****************** *******************images*************************************************************************************************
const carrousel_content=document.querySelector('.images');
const gauche = document.getElementById('gauche');
const droite = document.getElementById('droite');
let translate = 0;
gauche.addEventListener('click',function(){
    //les nombres positifs de 100 etc....
   translate += 100;
   if(translate > 0)
    translate = 0;
    
});
droite.addEventListener('click',function(){
    //les nombres negatifs de -100 etc....
    translate -= 100;
    if(translate < -200)
     translate = -200;
     carrousel_content.style.transform ='translateX('+translate +'%)';
    
 });

