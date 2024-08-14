const dob = document.getElementById("Dateofbirth");
const cod = document.getElementById("Currentdate");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let btn = document.getElementById("btn");

submit.addEventListener('click', () => {
    let dateEntered = new Date(dob.value);
    let currentDate = new Date(cod.value);

    if (dob.value && cod.value) {
        let age = currentDate.getFullYear() - dateEntered.getFullYear();
        let monthDiff = currentDate.getMonth() - dateEntered.getMonth();
        let dayDiff = currentDate.getDate() - dateEntered.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        let container = document.getElementById("container");
        container.innerText = "Your age is :"+age + " years";
        container.style.fontSize = "2.5rem";

        document.getElementById("dismissable").style.display = "block";
    } else {
        alert("Please select both dates.");
    }
});
reset.addEventListener('click', () => {
    dob.value = "";
    cod.value = "";
    document.getElementById("dismissable").style.display = "none";
});

btn.addEventListener('click', () => {
    document.getElementById("dismissable").style.display = "none";
});
// let dark=document.getElementById("dark");
// dark.addEventListener('click',()=>{
//     document.body.style.backgroundColor="black";
// })
// dark.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor="white";
// })
