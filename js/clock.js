const clock = document.getElementById("clock")


function clockEvent(){
    let date = new Date();
    let Hours = String(date.getHours()).padStart(2, "0");
    let Minutes = String(date.getMinutes()).padStart(2, "0");
    let Seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${Hours} : ${Minutes} : ${Seconds}`
};

clockEvent();
setInterval(clockEvent, 1000)