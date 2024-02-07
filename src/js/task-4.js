
document.querySelector('.login-form').addEventListener('submit', function(event){
    event.preventDefault();

    var emailValue = this.elements.email.value.trim()
    var passwordValue = this.elements.password.value.trim();

    if (!emailValue || !passwordValue){
       alert('All fields of form must be filled in');
       return;
    } 

    var formData = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formData);

    this.reset()
})