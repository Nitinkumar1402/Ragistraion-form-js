function validate() {
    // console.log(document.stud_form.email.value);

    var name = document.stud_form.name;
    var age = document.stud_form.age;
    var email = document.stud_form.email;
    var Mobile = document.stud_form.Mobile;
    var city = document.stud_form.city;
    var hobbi = document.stud_form.hobbi;
    //onsole.log(hobbies.length);

    var error = "";
    if (name.value.length <= 0) {
        error = "Name is required";
        // alert("Name is required");
        name.focus();
        document.getElementById('err_name').innerHTML = error;
        return false;
    }

    if (age.value < 18) {
        //alert("Age is required");
        error = "Age is required";
        age.focus();
        document.getElementById('err_age').innerHTML = error;
        return false;
    }
    if (email.value.length <= 0) {
        //alert("Email is required");
        error = "Email is required";
        email.focus();
        document.getElementById('err_email').innerHTML = error;
        return false;
    }
    if (Mobile.value.length <= 0) {
        //alert("Mobile is required");
        error = "Mobile No is required";
        Mobile.focus();
        document.getElementById('err_mobile').innerHTML = error;
        return false;
    }
    if (city.value == "city") {
        //alert("City is required");
        error = "City  is required";
        city.focus();
        //document.getElementById('err_city').innerHTML = error;
        return false;
    }
    var check = false;
    for (var i = hobbi.length - 1; i >= 0; i--) {
        if (hobbi[i].checked) {
            check = true;

        }
    }
    if (check == false) {
        error = "Check  is required";
        //alert("hobbies is required");
        //document.getElementById('err_check').innerHTML = error;
        return false;
    }
    return false;
}

function validateString(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if (!regExp.test(element.value)) {
        error = "Name is required";
        document.getElementById('err_name').innerHTML = error;
        element.style.border = "2px solid red";
        //element.focus();

        return false;
    }
    element.style.border = "2px solid green";


}

function validateAge(id) {
    var element = document.getElementById(id);
    var regExp =  age.value<18;
    if (!regExp.test(element.value)) {
        error = "Age is required";
        document.getElementById('err_age').innerHTML = error;
        //alert("Enter Number only");
        element.style.border = "2px solid red";
        //element.focus();

        return false;
    }
    element.style.border = "2px solid green";


}

function validateEmail(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z0-9._ ]+@[a-zA-Z0-9._ ]+\.[a-zA-Z]{2,4}$/;
    if (!regExp.test(element.value)) {
        
        error = "Email is required";
        document.getElementById('err_email').innerHTML = error;
        //alert("Enter Valid Email");
        element.style.border = "2px solid red";
        //element.focus();

        return false;
    }
    element.style.border = "2px solid green";


}

// function validatecity(id) {
//     var element = document.getElementById(id);
//     var regExp = /^[a-zA-Z0-9._ ]+@[a-zA-Z0-9._ ]+\.[a-zA-Z]{2,4}$/;
//     if (!regExp.test(element.value)) {
//         alert("Enter Valid Email");
//         element.style.border = "2px solid red";
//         //element.focus();

//         return false;
//     }
//     element.style.border = "2px solid green";


// }
function validateNumber(id) {
    var element = document.getElementById(id);
    var regExp = /^[0-9 ]{10}$/;
    if (!regExp.test(element.value)) {
        error = "Mobile no is required";
        document.getElementById('err_mobile').innerHTML = error;
        //alert("Enter Number only");
        element.style.border = "2px solid red";
        //element.focus();

        return false;
    }
    element.style.border = "2px solid green";


}