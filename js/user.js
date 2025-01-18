const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input")
const screenName = document.querySelector(".screen")
const HIDDEN = "hidden"


function submitEvent(e){
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    makeScreen(username)
};



function makeScreen(username){
    screenName.innerText = username;
    loginForm.classList.add(HIDDEN);
    screenName.classList.remove(HIDDEN);
}


const savedName = localStorage.getItem("username");

if(savedName === null){
    loginForm.addEventListener("submit", submitEvent)    
}
else{
    makeScreen(savedName)
}


