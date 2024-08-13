const dob = document.getElementById("Dateofbirth");
const cod = document.getElementById("Currentdate");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let btn = document.getElementById("btn");

submit.addEventListener('click', () => {
    let dateEntered = new Date(dob.value);
    let currentDate = new Date(cod.value);
    
    if (dob.value && cod.value) { // Ensure both dates are entered
        let age = currentDate.getFullYear() - dateEntered.getFullYear();
        let monthDiff = currentDate.getMonth() - dateEntered.getMonth();
        let dayDiff = currentDate.getDate() - dateEntered.getDate();

        // Adjust age if the current date is before the birthday in the current year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        let container = document.getElementById("container");
        container.innerText = age + " years";
        container.style.fontSize = "2.5rem";
        
        document.getElementById("dismissable").style.display = "block"; // Show the result div
    } else {
        alert("Please select both dates.");
    }
});

reset.addEventListener('click', () => {
    dob.value = "";
    cod.value = "";
    document.getElementById("dismissable").style.display = "none"; // Hide the result div
});

btn.addEventListener('click', () => {
    document.getElementById("dismissable").style.display = "none"; // Hide the result div
});
