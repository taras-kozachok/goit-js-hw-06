
const formData = { };
const formEl = document.querySelector('.login-form');
formEl.addEventListener("submit", onFormElSubmit);
function onFormElSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if ((email === "") | (password === "")) { alert("Все поля должны быть заполнены!") }
    else {
   
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, nameF) => {
                        formData[nameF] = value;            
        });
        console.log(formData);
        formEl.reset();
    }
   
}
