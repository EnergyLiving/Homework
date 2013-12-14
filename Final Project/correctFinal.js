var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	var errors, i, errorDiv, namePattern, emailPattern;

	errors = [];
	errorDiv = document.getElementById('error');
	namePattern = /^[a-z'-]+$/igm;
	emailPattern = /[a-z0-9_\-.]+@[a-z0-9]+\.[a-z]{2,}(.[a-z]{2,})?/igm;
	urlPattern = /^(http[s]?:\/\/|ftp:\/\/)?(www\.)?[a-zA-Z0-9-\.]+\.(com|org|net|mil|edu|ca|co.uk|com.au|gov)$/;
	phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;

	e.preventDefault();

	// Make sure length greater than zero
	if (namePattern.test(this.first_name.value) === false) {
		errors.push('First name is required');
	}

	if (namePattern.test(this.last_name.value) === false) {
		errors.push('Last name is required');
	}

	// Make sure e-mail is valid
	if (emailPattern.test(this.email.value) === false) {
		errors.push('Invalid e-mail');
	}

	if (urlPattern.test(this.url.value) === false) {
		errors.push('Invalid url');
	}

	if (phonePattern.test(this.mobile.value) === false) {
		errors.push('Invalid Phone Number');
	}

	if (phonePattern.test(this.home_phone.value) === false) {
		errors.push('Invalid Phone Number');
	}
	// Drop down validation
	if (this.experience.value.length === 0) {
		errors.push('Please indicate your level of experience');
	}

	// Date validation
	if (isDate(this.arrival_date.value) === false) {
		errors.push('You must indicate your arrival date.');
	}

	// Radio button validation
	if (document.querySelectorAll('[meal]:checked').length === 0) {
		errors.push('Please select a meal');
	}

	if (document.querySelectorAll('[skills]:checked').length === 0) {
		errors.push('Please select a skills');
	}



	//If any inputs failed prevent form submit
	if (errors.length > 0) {
		//prevent form submit
		e.preventDefault();

		//unhide
		errorDiv.className = '';

		//clear out previous errors
		errorDiv.innerHTML = errors.join('<br>');
	}
}, false);

// date === 12/30/2013
//function isDate(date) {
/* var dateParts;
 
         dateParts = date.split('/');
 
         if (dateParts.length !== 3) {
           return false;
         }
 
         // All numbers
         if (
           isNaN(parseFloat(dateParts[0])) || 
           isNaN(parseFloat(dateParts[1])) ||
           isNaN(parseFloat(dateParts[2]))
           ) {
           return false;
         }
 
         // Month validation
         if (dateParts[0] < 1 && dateParts[0] > 12) {
           return false;
         }
 
         return true;
       }*/