let card = document.querySelector('.card')

 card.addEventListener('scroll', function(){
    //Expertise Animation
    let expertise = document.querySelector('.Expertise .animated')
    let expertisePosition = expertise.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1;

    //Education Animation
    let education = document.querySelector('.education .animated')
    let educationPosition = education.getBoundingClientRect().top;
    
    // console.log(education)
    // console.log(screenPosition)
    // console.log(educationPosition)

    if(expertisePosition < screenPosition){
        expertise.classList.add('fadeIn')
    } 
    
   if (educationPosition < screenPosition) {
        education.classList.add('fadeInRight')
    }

   
 });
    
