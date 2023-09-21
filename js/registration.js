//document addEventListener
document.addEventListener('DOMContentLoaded', function () {
    //content
    const form = document.getElementById('frmRegistration');
    const nameInput = document.getElementById('txtFullName');
    const emailInput = document.getElementById('txtemailAddress');
    const phoneInput = document.getElementById('txtphoneNumber');
    const passwordInput = document.getElementById('txtpassword');
    const confirmPasswordInput = document.getElementById('txtconfirmpassword');

    //Error message
    const nameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailAddressError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Reset styles
    const allInputs = [nameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput];
    for (const input of allInputs) {
        input.classList.remove("invalid-input");
    }

    //phone number validation
    function validatePhoneNumber(){
        let phoneno = /^\d{10}$/;

    }

    //form addEventListener
    form.addEventListener('submit', function(event) {
        //Prevent form submission
        event.preventDefault();
        //Validation - FullName
        if (!nameInput.value.trim()) {

            nameError.textContent = 'Enter full name.';
            nameInput.classList.add("invalid-input");
        } else {
            nameError.textContent = '';
        }
        //Validation - Email Address
        if (!emailInput.value.trim()) {

            emailError.textContent = 'Enter your email address.';
            emailInput.classList.add("invalid-input");
        } else {
            emailError.textContent = '';
        }
        
        //Validation - Phone Number
        if (!phoneInput.value.trim()) {

            phoneNumberError.textContent = 'Enter a phone number.';
            phoneInput.classList.add("invalid-input");
        }else if(phoneInput.value.length!=10){

            phoneNumberError.textContent = 'Phone number should be 10 digits long.';

        }
         else {
            phoneNumberError.textContent = '';
        }
        //Validation - password
        if (!passwordInput.value.trim()) {

            passwordError.textContent = 'Enter password.';
            passwordInput.classList.add("invalid-input");
        } else {
            passwordError.textContent = '';
        }
        //Validation - confirm password
        if (!confirmPasswordInput.value.trim()) {

            confirmPasswordError.textContent = 'Enter password confirmation.';
            confirmPasswordInput.classList.add("invalid-input");
        }else if(confirmPasswordInput.value!==passwordInput.value){
            confirmPasswordError.textContent = 'Password doesnot match';
            confirmPasswordInput.classList.add("invalid-input");
        }
         else {
            confirmPasswordError.textContent = '';
        }

    });

});