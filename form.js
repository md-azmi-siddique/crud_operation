let btn = document.getElementById('submit');

btn.addEventListener('click', function(){
    console.log('btn hit');
    getInput("name", "age", "gender");
})

function getInput(name, age, gender) {
    var userName = document.getElementById(name).value;
    var userAge = document.getElementById(age).value;
    if(isNaN(userAge)){
        alert("give a number as input");
    }
    else{
        document.getElementById("ageFill").innerText = userAge;
    }
    var userGender = document.getElementById(gender).value;

    document.getElementById("nameFill").innerText = userName;
    // document.getElementById("ageFill").innerText = userAge;
    document.getElementById("genderFill").innerText = userGender;

    var userName = document.getElementById(name).value = "";
    var userAge = document.getElementById(age).value = "";
    var userGender = document.getElementById(gender).value = "";
}
