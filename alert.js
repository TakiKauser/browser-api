// alert
const warning = () => {
    alert("Get the Heck Off...");
}
// confirm
const ensure = () => {
    const response = confirm("Are you sure???");
    console.log(response);
    if(response === true){
        alert("Ok, Done!");
    }
    else{
        alert("Great");
    }
}
// prompt
const infoQuery = () => {
    const name = prompt("What's your name, dude???");
    if(name){
        console.log(name);
    }
}