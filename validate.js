const form = document.querySelector('.cont-inp-form');
const errorField = document.querySelector('.email-validat-mess');
const emailField = document.querySelector('.user-email');

form.addEventListener('submit', (event) => {
  let errorMessage = null;
  const lowerCaseEmail = emailField.value.toLowerCase();
  if (lowerCaseEmail !== emailField.value) {
    errorMessage = 'Email field should be in lowercase';
  }

  if (errorMessage !== null) {
    event.preventDefault();
    errorField.textContent = errorMessage;
  }
});