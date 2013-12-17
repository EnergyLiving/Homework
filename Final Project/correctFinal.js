var form = document.querySelector('form');
       form.addEventListener('submit', function (e) {
         var errors, i, errorDiv, namePattern, emailPattern, urlPattern, phonePattern;
         
         errors = [];
         errorDiv = document.getElementById('error');
         namePattern = /^[a-z'-]+$/igm;
         emailPattern = /[a-z0-9_\-.]+@[a-z0-9]+\.[a-z]{2,}(.[a-z]{2,})?/igm;
         urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
         phonePattern = /\d{3}-\d{3}-\d{4}/

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


         if (limitlength(this.first_name.value)=== false) {
         	errors.push('You have a 50 character limit.')
         }

         if (limitlength(this.last_name.value)=== false) {
         	errors.push('You have a 50 character limit.')
         }

         if (limitlength(this.bio.value)=== false) {
         	errors.push('You have a 140 character limit')
         }


         if (document.querySelectorAll('[skills]:checked').length === 0) {
           errors.push('Please select a skill.');
         }

         if(this.bio.value.length === 0) {
           errors.push('Please include your bio.')
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
 
       function isDate(date) {
         var dateParts;
 
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

       }

       
   

      if function limitlength(obj, length){
		var maxlength=length
		if (obj.value.length>maxlength)
		obj.value=obj.value.substring(0, maxlength)
		
    }

		return false;
	


     }*/







	

	
	
	

	



	