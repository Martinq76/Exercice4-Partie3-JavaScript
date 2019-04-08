function validation() {
  if (password.value === confirmPassword.value) {
    document.getElementById('password').style.border = '3px solid green';
    document.getElementById('confirmPassword').style.border = '3px solid green';
  }else{
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirmPassword').style.border = '3px solid red';
  }
}
