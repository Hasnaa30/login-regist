var userName=document.querySelector(".userName");
var userEmail=document.querySelector(".userEmail");
var userPassword=document.querySelector(".userPassword");
var signupBtn=document.querySelector(".signupBtn");
var error=document.querySelector(".error");

document.forms[0].addEventListener("click",function(eventInfo){
    eventInfo.preventDefault();
});
var signupContainer=[];
localStorage.setItem("data2",`${userName.value}`);

function fillData(){
    if(usernameRegex()==true && emailRegex()==true && passwordRegex()==true){
        var data= {
            uName: localStorage.setItem("data2",`${userName.value}`),
            uEmail: userEmail.value,
            uPassword: userPassword.value,
        }
        signupContainer.push(data);
        localStorage.setItem("data",JSON.stringify(signupContainer));
    }
};
if (signupBtn){
    signupBtn.addEventListener("click",function(){
            fillData();
            validateFun();
        });
}

// validation 
function validateFun(){
    if(userName.value=="" && userEmail.value=="" && userPassword.value==""){
        error.innerHTML="<p class='text-danger'>All inputs are required</p>";
    }
    else if(signupContainer==JSON.parse(localStorage.getItem("data"))){
        error.innerHTML="<p class='text-danger'>Email already exists</p>";
    }
    else if(true){
        error.innerHTML="<p class='text-success'>success</p>";
    }
}
// regular expression
function usernameRegex(){
    var regex=/^[a-z]{3,9}$/
    if(regex.test(userName.value)==true){
        return true;
    }
    else{
        alert("invalid Name");
        return false;
    }
}

function emailRegex(){
    var regex=/^[a-z]{3,}(_|\.)?[a-z]{3,}?[0-9]{2,3}@(gmail|yahoo)\.com$/;
    if(regex.test(userEmail.value)==true){
        return true;
    }
    else{
        alert("invalid email");
        return false;
    }
}

function passwordRegex(){
    var regex=/^[0-9]{6,}[a-zA-Z]{3,}$/;
    if(regex.test(userPassword.value)==true){
        return true;
    }
    else{
        alert("invalid password");
        return false;
    }
}
