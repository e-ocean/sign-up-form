
const passwordsEl = document.querySelector("body > div.right-side > div > form > fieldset:nth-child(3) > div")
const password1 = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const passwords = document.querySelectorAll(".password-input")
const numberEl = document.querySelector("#tel")
console.log(numberEl)


//to style invalid inputs only after user interacts with them
document.querySelectorAll('input, select, textarea').forEach(function(el) {
    el.addEventListener('input', function() {
        this.classList.add('touched');
    });
});


//function to match password fields

function matchPasswords(){
    if (password1.value !== "" || password2.value !== ""){
        if (password1.value === password2.value){
            passwordsEl.classList.remove("error")
        }
        else{
            passwordsEl.classList.add("error")
        }
    } else{
        passwordsEl.classList.remove("error")
    }
   
}


password2.addEventListener('blur', matchPasswords); 


numberEl.addEventListener('input', (event) =>{

     if (numberEl.validity.patternMismatch){
        numberEl.setCustomValidity("Please enter a valid phone-number")
    } 
    else {
        numberEl.setCustomValidity('')
    }
    
})


// email.addEventListener("input", (event) => {
//     if (email.validity.typeMismatch) {
//       email.setCustomValidity("I am expecting an email address!");
//     } else {
//       email.setCustomValidity("");
//     }
//   });













