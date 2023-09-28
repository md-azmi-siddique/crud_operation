let btn = document.getElementById('submit');

btn.addEventListener('click', function(){
    console.log('submit button hit'); //debugger
    getInput("name", "age", "gender");
  
})

function getInput(name, age, gender) {
    let userName = document.getElementById(name).value;
    let userAge = document.getElementById(age).value;
    if (isNaN(userAge)) {
        alert("Please enter a valid age");
    } else {
        document.getElementById("ageFill").innerText = userAge;
    }
    let userGender = document.getElementById(gender).value;

    document.getElementById("nameFill").innerText = userName;
    document.getElementById("genderFill").innerText = userGender;

    document.getElementById(name).value = "";
    document.getElementById(age).value = "";
    document.getElementById(gender).value = "";
}


let deleteBtn = document.getElementById('delete');

deleteBtn.addEventListener('click', function(){
    console.log('delete button hit');
    deleteInput("nameFill", "ageFill", "genderFill")
})

function deleteInput(name, age, gender) {
    document.getElementById(name).innerText = "";
    document.getElementById(age).innerText = "";
    document.getElementById(gender).innerText = "";
}

