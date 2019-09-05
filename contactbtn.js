let conbtn = document.querySelector('.contactbtn')

conbtn.addEventListener('click', function(e){
    let btn = document.querySelector('.contactbtn')
    let formName = document.querySelector('.formName')
    let formControlName = document.querySelector('.formName .form-control')
    let formControlEmail = document.querySelector('.formEmail .form-control')
    // let formControlText = document.querySelector('.formText .form-control')
    let InputName = document.getElementById('name').value;
    let InputEmail = document.getElementById('email').value;
    // let InputText = document.getElementById('text').value;
   
    let span1 = document.querySelector('.formName .span1')
    let span2 = document.querySelector('.formEmail .span2')
    
    
//  console.log(btn) 
  
   if(InputName == "" && InputEmail == ""){
     
        formControlName.classList.add('borderRed')
        formControlEmail.classList.add('borderRed')
        formControlName.classList.remove('borderGreen')
        formControlEmail.classList.remove('borderGreen')
       
        span1.textContent = "Please Fillup Name"
        span2.textContent = "Please Fillup Email"

    } else if(InputName != "" && InputEmail != ""){
        formControlName.classList.add('borderGreen')
        formControlEmail.classList.add('borderGreen')

        let att = document.createAttribute("data-target")
        att.value = "#exampleModal";
        btn.setAttributeNode(att);
        
        setInterval(function(){
            btn.removeAttribute("data-target")
        }, 1000);

    } else if (InputName != "" && InputEmail == ""){
        formControlName.classList.add('borderGreen')
        formControlEmail.classList.add('borderRed')
        formControlEmail.classList.remove('borderGreen')
        span2.textContent = "Please Fillup Email"

    } else if (InputEmail != "" && InputName == ""){
        formControlEmail.classList.add('borderGreen')
        formControlName.classList.add('borderRed')
        formControlName.classList.remove('borderGreen')
        span1.textContent = "Please Fillup Name"
    
    } else if (InputName == "" && InputEmail != ""){
        formControlName.classList.remove('borderGreen')
        formControlEmail.classList.remove('borderGreen')
        formControlName.classList.add('borderRed')
        span1.textContent = "Please Fillup Name"

    } else if (InputEmail == "" && InputName != ""){
        formControlEmail.classList.remove('borderGreen')
        formControlName.classList.remove('borderGreen')
        formControlEmail.classList.add('borderRed')
        span2.textContent = "Please Fillup Email"
    } 
    

    
//if you type anything in Inputbox the border bottom will turn to green    
    formControlName.addEventListener('keyup', function(){   
    if(InputName != null){
        formControlName.classList.remove('borderRed')
        formControlName.classList.add('borderGreen')
        span1.textContent = ""
    } 

    });

    formControlEmail.addEventListener('keyup', function(){
        if(InputEmail != null){
            formControlEmail.classList.remove('borderRed')
            formControlEmail.classList.add('borderGreen')
            span2.textContent = ""
        } 
    });
});

// let formControlName = document.querySelector('.formName .form-control')

// formControlName.addEventListener('keyup', function(e){
//     let formName = document.querySelector('.formName')
//     let formControlName = document.querySelector('.formName .form-control')
//     let formControlEmail = document.querySelector('.formEmail .form-control')
//     // let formControlText = document.querySelector('.formText .form-control')
//     let InputName = document.getElementById('name').value;
//     let InputEmail = document.getElementById('email').value;
//     // let InputText = document.getElementById('text').value;
   
//     let span1 = document.querySelector('.formName .span1')
//     let span2 = document.querySelector('.formEmail .span2')

    
//     console.log(InputName)

//     if (InputName.length === "null") {
//         span1.textContent = "Please Fillup Name111"
//         console.log("ok")
//     }
// });

