document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (!fullname) {
        alert("you need to enter your name.");
        return;
    }
    if (!email) {
        alert("Please enter your email.");
        return;
    }   
    if (!age || age<18) {
        alert("You must be 18 years or older to submit this form");
        return;
    }

    const Data = {
        fullame: fullname,
        email: email,
        age: age
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET","submit.json",true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readystate === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    }
    xhr.send(JSON.stringify(Data))
    console.log(Data)
});