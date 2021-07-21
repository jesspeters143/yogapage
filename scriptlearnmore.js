// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

console.log(emailElement);
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e){
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if(emailValue.includes('@')) {
		//all good
		alert('Thank you');
	} else {
		alert('Oh, no. That does not look like a valid email address. Please try again')
	}

	console.log('Email: ',emailValue);
	console.log('Message: ',messageValue);
})
// attaching click listeners - how many times users clicked on submit button
// getting user entered values, data from users - emails
// javascript validations - tell users if something is worng (think as a validation pop up)
