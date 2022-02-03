const formEl = document.querySelector('.login-form');
formEl.addEventListener("submit", onFormElSubmit);
function onFormElSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if ((email === "") | (password === "")) { alert("Все поля должны быть заполнены!") }
    else {
    //console.log(email);
    //console.log(password);
        const formData = new FormData(event.currentTarget);
         formData.forEach((value, nameF) => { console.log(nameF, value) });
        formEl.reset();
    }
}
