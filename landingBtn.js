LandButton = document.querySelector('.landBtn')
svg = document.getElementById('logo')
h6 = document.querySelector('.caption h6')
boxBorder = document.querySelector('.Boxbottomleft')
boxBordex2 = document.querySelector('.Boxtopright')
landing = document.querySelector('.landing')


LandButton.addEventListener('click', function(e){
    //Add Class
    e.preventDefault()
    svg.classList.add('Addclass');
    h6.classList.add('Addclass');
    LandButton.classList.add('Addclass');
    boxBorder.classList.add('AddKeyframe');
    boxBordex2.classList.add('AddKeyframe');
    landing.classList.add('landAddclass');

    // window.scrollBy(0, 1110);
    
    // console.log(svg)
    //Remove Class
    setTimeout(function(){
        svg.classList.remove('Addclass');
        h6.classList.remove('Addclass');
        LandButton.classList.remove('Addclass');
        boxBorder.classList.remove('AddKeyframe');
        boxBordex2.classList.remove('AddKeyframe');
        landing.classList.remove('landAddclass');
        window.scrollBy(0, 610);
    }, 3000);
});

//How to get svg path length(need this for animation on svg)
// const logo = document.querySelectorAll('#logo path');

//    for (let i = 0; i < logo.length; i++){
//        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
//    }

  
   