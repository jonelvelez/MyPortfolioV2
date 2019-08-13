// Scroll Bar
// function scrollEffect(){
//   let aboutMe = document.querySelector('.about-me');
//   let myImageBorder = document.querySelector('.my-image-border');
//   let seeMoreButton = document.querySelector('.see-more-btn');
//   let introPosition = aboutMe.getBoundingClientRect().top;
//   let screenPosition = window.innerHeight / 1;


//   if(introPosition < screenPosition){
//       aboutMe.classList.add('about-me-appear');
//       myImageBorder.classList.add('my-image-border-appear');
//       seeMoreButton.classList.add('see-more-btn-appear');
//   }else {
//       aboutMe.classList.remove('about-me-appear');
//       seeMoreButton.classList.remove('see-more-btn-appear');
//       myImageBorder.classList.remove('my-image-border-appear');
//   }
// }




function scrollChangebg(){
    let lexmark = document.querySelector('.lexmark-content')
    let creative = document.querySelector('.creative-content')
    let webdev = document.querySelector('.webdev-content')
    let photoshop = document.querySelector('.photoshop-content')

    let background1 = document.querySelector('.background-1')
    let background2 = document.querySelector('.background-2')
    let background3 = document.querySelector('.background-3')
    let background4 = document.querySelector('.background-4')

    
    let lexmarkPosition = lexmark.getBoundingClientRect().bottom;
    let creativePosition = creative.getBoundingClientRect().bottom;
    let webdevPosition = webdev.getBoundingClientRect().bottom;
    let photoshopPosition = photoshop.getBoundingClientRect().bottom;

    // let screenPosition = window.innerHeight / 2;

    if(lexmarkPosition > 400){
        background1.classList.add('background-1-appear')
        background2.classList.remove('background-2-appear')
        background3.classList.remove('background-3-appear')
        background4.classList.remove('background-4-appear') 
    } else if (creativePosition > 450){
        background2.classList.add('background-2-appear')
        background1.classList.remove('background-1-appear')   
        background3.classList.remove('background-3-appear')    
        background4.classList.remove('background-4-appear') 
    } else if (webdevPosition > 500){
        background3.classList.add('background-3-appear')
        background2.classList.remove('background-2-appear')
        background1.classList.remove('background-1-appear') 
        background4.classList.remove('background-4-appear') 
    } else if (photoshopPosition > 550){
        background4.classList.add('background-4-appear')
        background3.classList.remove('background-3-appear')
        background2.classList.remove('background-2-appear')
        background1.classList.remove('background-1-appear')  
    }

  
  
}
    
window.addEventListener('scroll' , scrollChangebg);
