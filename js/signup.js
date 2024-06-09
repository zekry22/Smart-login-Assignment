


function signup() {
    var username = document.getElementById('input1').value;
    var email = document.getElementById('input2').value;
    var password = document.getElementById('input3').value;


    var existingUser = localStorage.getItem(email);

    if (existingUser) {
        alert('البريد الإلكتروني مسجل بالفعل!');
        return false;
    } else {
        
        var userData = {
            username: username,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        alert('تم التسجيل بنجاح!');
        return true;
    }
}

