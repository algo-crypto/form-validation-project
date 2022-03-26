

// form validation 

// grab form and input

const form = document.querySelector('.right-col form')
const inputs = document.querySelectorAll('.right-col form input')


form.addEventListener('submit',(e) => {
   e.preventDefault() // prevent default
   inputs.forEach( input => {
       if(!input.value){
           input.parentElement.classList.add('error')
       }else {
        input.parentElement.classList.remove('error')
        if(input.type === 'email'){
          if(validateEmail(input.value)){
            input.parentElement.classList.remove('error')
          } else {
            input.parentElement.classList.add('error')
          }


        } // end of if


       } // end of else
   })
})



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}