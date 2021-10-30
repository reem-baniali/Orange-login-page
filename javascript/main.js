//call input elements
let email = document.querySelector("#email");
let mobile = document.querySelector("#PhoneNumber");
let password = document.querySelector("#password");
let btn = document.querySelector(".signUp-btn ");
let check = document.querySelector("#Check1");
let form = document.querySelector(".myform");

//call input err elements
let err = document.querySelectorAll(".errMessage");

//declare re1jex for email
let regexEmail = /^[A-z0-9._-]+@(gmail|yahoo|hotmail).com$/;
let regexMobile = /^[0][7][7][0-9]{7}$/
let regexPass = /^[A-Z]{6,18}$/;
//validation function
function validation() {
  if (email.value == "") {
    err[0].textContent = "please add email";
  } else if (regexEmail.test(email.value)) {
    err[0].innerText = "";
    localStorage.setItem("userEmail", email.value);
  } else {
    err[0].innerText = " Email should be like Eg";
  }

  if (mobile.value == "") {
    err[1].innerHTML = "this field is required";
  } else if (regexMobile == mobile.value) {
    err[1].innerHTML = "";
    localStorage.setItem("userMobile", mobile.value);
  } else {
    err[1].innerHTML = "mobile number should be like Eg:";
  }

  if (password.value == "") {
    err[2].innerHTML = `The password field is required`;
  } else {
    if (regexPass.test(password.value)) {
      err[2].innerHTML = "";
    } else {
      err[2].innerText = `The password must have capital letters, small letters and numbers`;
    }
  }

  if (!check.checked) {
    err[3].innerHTML = "please check this field";
  } else {
    err[3].innerText ="" ;
  }
}

//add event listener
btn.addEventListener("click", (e) => {
  e.preventDefault();
  validation();
});
