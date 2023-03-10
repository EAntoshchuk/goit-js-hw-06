const formEL = document.querySelector(".login-form");
const emailInputEL = formEL.elements.email;
const passwordInputEL = formEL.elements.password;
const submitBtnEl = formEL.lastElementChild;

formEL.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  if (emailInputEL.value === "") {
    alert(`❗All fields must be filled❗`);
    emailInputEL.focus();
    emailInputEL.style.boxShadow = "1px 3px 7px red";
    return;
  } else if (passwordInputEL.value === "") {
    alert(`❗All fields must be filled❗`);
    emailInputEL.style.boxShadow = "none";
    passwordInputEL.focus();
    passwordInputEL.style.boxShadow = "1px 3px 7px red";
    return;
  }

  passwordInputEL.style.boxShadow = "none";

  const emailLoginEL = formEL.elements.email.name;
  const passwordLoginEL = formEL.elements.password.name;

  console.log(emailLoginEL);
  console.log(passwordLoginEL);
  const inputData = {
    emailLoginEL: emailInputEL.value,
    passwordLoginEL: passwordInputEL.value,
  };

  console.log(inputData);
  event.currentTarget.reset();
}
