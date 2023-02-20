var userEmail=document.querySelector(".userEmail");
var userPassword=document.querySelector(".userPassword");
var loginBtn=document.querySelector(".loginBtn");
var error=document.querySelector(".error");
var userName;

document.forms[0].addEventListener("click",function(eventInfo){
    eventInfo.preventDefault();
});

var dataContainer;
(function(){
    if(localStorage.getItem("data")==null)
    dataContainer=[];
    else
    dataContainer=JSON.parse(localStorage.getItem("data"));
})();

function enterData(){
    if(emailRegex()==true && passwordRegex()==true){
        var data= {
            uEmail: userEmail.value,
            uPassword: userPassword.value,
        }
        dataContainer.push(data);
        localStorage.setItem("data",JSON.stringify(dataContainer));
        addPage();
    }
}
loginBtn.addEventListener("click",function(){
    enterData();
    validateFun();
});

function addPage(){
    var box="";
    for(var i=0 ; i<dataContainer.length;i++){
        box =`
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand text-uppercase text-white fs-4" href="#">Smart login</a>
                <button class="navbar-toggler border-1" onclick="styleBtn()" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link btn btn-outline-warning form-lg-control" aria-current="page" href="index.html">LogOut</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <header id="home" class="d-flex justify-content-center align-items-center">
            <div id="text" class="h-25">
                <h1 id="h1" class="d-flex justify-content-center align-items-center h-100">Welcome ${localStorage.getItem("data2")}</h1>
            </div>
        </header>
            `
        }
    document.body.innerHTML=box;
};

function styleBtn(){
    var toggle=document.querySelector(".navbar-toggler");
    toggle.style.cssText=`
    border: 2px solid black !important;
    outline: 1px solid white !important;
    box-shadow: none !important;
    `
};

// validation
function validateFun(){
    if(userEmail.value=="" && userPassword.value==""){
        error.innerHTML="<p class='text-danger'>All inputs are required</p>"
    }
}

// regular expression
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
