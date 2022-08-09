import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    message: document.querySelector("textarea"),
    btn: document.querySelector("button")
}

autocompleteOnLoad(); 

refs.form.addEventListener('input', throttle(saveData, 500))
refs.form.addEventListener('submit', onFormSubmit)

let obj = {}

function saveData(event) {
   obj[event.target.name] = event.target.value;

   localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}

function onFormSubmit(evt) {
   evt.preventDefault();
   evt.currentTarget.reset();
   console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
   localStorage.removeItem("feedback-form-state")
}

function autocompleteOnLoad() {
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"))
    
    if (savedData) {
      refs.email.value = savedData.email;
      refs.message.value = savedData.message;
    }
    
  
}