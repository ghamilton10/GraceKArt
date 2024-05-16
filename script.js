'use strict';
document.addEventListener('DOMContentLoaded', function(){
const gallery = document.querySelector('.gallery');
const mainImg = document.querySelector('.preview-container img');
const mainCaption = document.querySelector('.preview-container figcaption');
gallery.addEventListener('click', function(event){
    console.log('click');
    if (event.target.tagName === 'IMG'){
        const imageClicked = event.target;

        mainImg.src = imageClicked.src;
        mainImg.alt = imageClicked.alt;
        mainCaption.textContent = imageClicked.alt;       
    }
})

})




