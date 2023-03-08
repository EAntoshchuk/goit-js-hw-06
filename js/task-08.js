const formEL = document.querySelector(".login-form");
const emailInputEL = formEL.elements.email;
const passwordInputEL = formEL.elements.password;
const submitBtnEl = formEL.lastElementChild;

formEL.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventdefault();
  if (emailInputEL.value.length === "") {
    alert(`❗All fields must be filled❗`);
    emailInputEL.focus();
    emailInputEL.style.boxShadow = `0 0 15px red`;
    return;
  } else if (passwordInputEL.valeu.length === "") {
    emailInputEL.style.boxShadow = `none`;
    passwordInputEL.focus();
    passwordInputEL.style.boxShadow = `0 0 15px red`;
    return;
  }
  passwordInputEL.style.boxShadow = `none`;

  const emailLoginInputEL = formEL.elements.email.name;
  const passwordLoginEL = formEL.elements.password.name;

  console.log(emailLoginInputEL);
  console.log(passwordLoginEL);
  const inputData = {
    emailLoginInputEL: emailInputEL.value,
    passwordLoginEL: passwordInputEL.value,
  };
  console.log(inputData);
  event.currentTarget.reset();
}
