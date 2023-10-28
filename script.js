const reg_name = document.getElementById("rgname");
const reg_number = document.getElementById("rgnumber");
const roll = document.getElementById("occupation");
const submit = document.getElementById("submitbutton");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the values of the input fields
    const regNameValue = reg_name.value;
    const regNumberValue = reg_number.value;
    const rollValue= roll.value;

    // Check if the "Name" and "Contact no" fields are empty
    if (regNameValue === "" || regNumberValue === "") {
        alert("Name or contact number is empty");
    } else {
        // If the fields are not empty, you can proceed with form submission or other actions
        // For example, you can redirect the user to another page
        window.location.href = "/index2.html";
    }
    username.innerHTML=regNameValue;
}
);
