const form = document.querySelector('.sign-up');
const inputMail = document.getElementById('mail');
const msgError = document.querySelector('.error');

/* Check if the email has been entered correctly */
inputMail.addEventListener('invalid', (e) => {
	e.preventDefault();
	if (!e.target.validity.valid) {
		msgError.textContent = 'Valid email required';
		msgError.classList.add('msg-error');

		inputMail.classList.add('input-error');
	}
});

/* Submits the form */
form.addEventListener('submit', (e) => {
	e.preventDefault();
	msgError.textContent = '';
	msgError.classList.remove('msg-error');
	inputMail.classList.remove('input-error');
});
