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

    //SVG animation
function scrollAboutMe(){
    //Getting Class
    let sectionAbout = document.querySelector('.section-about')
    // let topsideleft = document.querySelector('.section-about .topsideleft')
    // let screenPosition = window.innerHeight / 2;
    let sectionAboutPosition = sectionAbout.getBoundingClientRect().bottom;
    const svgtl = document.querySelector('.topsideleft svg')
    const svgtr = document.querySelector('.topsideright svg')
    const svgbl = document.querySelector('.bottomsideleft svg')
    const svgbr = document.querySelector('.bottomsideright svg')
    let MyPath = document.querySelector('.topsideleft path')
    let length = MyPath.getTotalLength();
    
    // console.log(length)

        //How to get svg length(need this for animation on svg)
//    for (let i = 0; i < svg.length; i++){
//        console.log(`Letter ${i} is ${svg[i].getTotalLength()}`);
//    }

        //Adding Id on SVG
    if(sectionAboutPosition < 660){
        svgtr.setAttribute("id", "svgline")
        svgtl.setAttribute("id", "svgline")
        svgbl.setAttribute("id", "svgline")
        svgbr.setAttribute("id", "svgline")
    }
    
    // console.log(sectionAboutPosition)
}

//Invoke function
window.addEventListener('scroll', scrollAboutMe);


//Changing Background
function scrollChangebg(){
    //Selecting Class
    let lexmark = document.querySelector('.lexmark-content')
    let creative = document.querySelector('.creative-content')
    let webdev = document.querySelector('.webdev-content')
   
    let background1 = document.querySelector('.background-1')
    let background2 = document.querySelector('.background-2')
    let background3 = document.querySelector('.background-3')

    //Getting the Value of Screen hight
    let lexmarkPosition = lexmark.getBoundingClientRect().bottom;
    let creativePosition = creative.getBoundingClientRect().bottom;
    let webdevPosition = webdev.getBoundingClientRect().bottom;
    
    

    let screenPosition = window.innerHeight / 1;

    // console.log(creativePosition)
    //Add Class and Remove Class
    if(creativePosition > 450){
        background2.classList.add('background-2-appear')
        background1.classList.remove('background-1-appear')   
        background3.classList.remove('background-3-appear') 
    
    } else if (webdevPosition > 300){
        background3.classList.add('background-3-appear')
        background2.classList.remove('background-2-appear')
        background1.classList.remove('background-1-appear') 
        
    } else if (lexmarkPosition > 200){
        background1.classList.add('background-1-appear')
        background2.classList.remove('background-2-appear')
        background3.classList.remove('background-3-appear')
     }

     if(creativePosition < 700){
        creative.classList.add('creative-content-appear') 
        webdev.classList.add('webdev-content-appear')
        lexmark.classList.add('lexmark-content-appear')
     } 
}
    //invoke function
window.addEventListener('scroll' , scrollChangebg);



function qoutes(){
    let qoutestext = document.querySelector('.text')
    let qoutesPosition = qoutestext.getBoundingClientRect().bottom;
    let screenPosition = window.innerHeight / 1;

    // console.log(qoutesPosition)
    // console.log(screenPosition)

    if(qoutesPosition < 900) {
        qoutestext.classList.add('fadeIn')
       
    }

}

window.addEventListener('scroll', qoutes);

// animated fadeInUp



