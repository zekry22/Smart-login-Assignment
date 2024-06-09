

function login() {
    var email = document.getElementById('input1').value;
    var password = document.getElementById('input2').value;
    var loginMessage = document.getElementById('loginMessage');

    if (email === '' || password === '') {
        alert('Error! Enter the data');
        return false;
    }

    var storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        sessionStorage.setItem('username', storedUser.username);
        loginMessage.textContent = 'Success';

        setTimeout(function() {
            location.href = 'end.html';
        }, 500); 
        return false;  
    } else {
        alert('Invalid email or password');
        return false;
    }
}





// function login() {
//     var email = document.getElementById('input1').value;
//     var password = document.getElementById('input2').value;
//     var loginMessage = document.getElementById('loginMessage');

//     if (email === '' || password === '') {
//         alert('Error! Enter the data');
//         return false;
//     }

    
//     var storedUser = JSON.parse(localStorage.getItem(email));

//     if (storedUser && storedUser.password === password) {
//         sessionStorage.setItem('username', storedUser.username);
//         loginMessage.textContent = 'Success';

//         location.href = 'end.html';

        
//         return false;  
//     } else {
//         alert('Invalid email or password');
//         return false;
//     }
// }

















