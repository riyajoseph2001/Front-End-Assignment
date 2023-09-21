document.addEventListener('DOMContentLoaded', function () {

    //content 
    const form = document.getElementById('frmLogin');
    const userNameInput = document.getElementById('txtUserName');
    const passwordInput = document.getElementById('txtPassword');
    const button = document.getElementById('register');

    //error
    const userNameError = document.getElementById('userNameError');
    const passwordError = document.getElementById('passwordError');

    //form addEventListener
    form.addEventListener('submit', function (event) {
        //Prevent form submission
        event.preventDefault();
        //Validation username
        if (!userNameInput.value.trim()) {
            userNameError.textContent = "Username is required";
            
        } else {
            userNameError.textContent = '';
        }
        //Validation - password
        if (!passwordInput.value.trim()) {
            passwordError.textContent = "Password is required";
           
        } else if (passwordInput.value.length < 4) {
            passwordError.textContent = "Password should be more than 4 characters";
        }
        else {
            userNameError.textContent = '';
        }


    });

    //addEventListener for enabling submit button
    var userflg;
    var passwordflg;
    userNameInput.addEventListener('input', () => {
        if (userNameInput.value.length > 0) {
            userflg=1;
        }
        else {
            userflg=0;
        }
        setbutton();
    });
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length > 0) {
            passwordflg=1;
        }
        else {
            passwordflg=0;
        }
        setbutton();
    });
    function setbutton(){
        if(userflg ===1 && passwordflg===1){
            button.disabled=false;
        }
        else{
            button.disabled=true;
        }
    }


});