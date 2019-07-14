var firstname = document.getElementById("firstname"),
    lastname = document.getElementById("lastname"),
    email = document.getElementById("email"),
    genderMale = document.getElementById("genderMale"),
    genderWoman = document.getElementById("genderWoman"),
    //Error (spans for validation error)
    errorFirstname = document.getElementById("errorFirstname"),
    errorLastname = document.getElementById("errorLastname"),
    errorEmail = document.getElementById("errorEmail"),
    errorGender = document.getElementById("errorGender")
    isGenderSelected = false,
    isFormOkay = false;

document.getElementById("myForm").addEventListener("submit", function (e) {

    isFormOkay = true;

    //Clear form errors
    errorFirstname.innerText = "";
    errorLastname.innerText = "";
    errorEmail.innerText = "";
    errorGender.innerText = "";

    firstname.style.boxShadow = "none";
    lastname.style.boxShadow = "none";
    email.style.boxShadow = "none";

    if (firstname.value.toString().trim() == "") {
        errorFirstname.innerText = "نام را وارد کنید";
        firstname.style.boxShadow = "0 0 5px 2px rgb(228, 88, 88)";
        isFormOkay = false;
    } else if (lastname.value.toString().trim() == "") {
        errorLastname.innerText = "نام خانوادگی را وارد کنید";
        lastname.style.boxShadow = "0 0 5px 2px rgb(228, 88, 88)";
        isFormOkay = false;
    }else if(email.value.toString().trim()==""){
        errorEmail.innerText = "آدرس ایمیل را وارد کنید";
        email.style.boxShadow = "0 0 5px 2px rgb(228, 88, 88)";
        isFormOkay = false;
    } 
    else if (!validateEmail(email.value.toString().trim())) {
        errorEmail.innerText = "آدرس ایمیل را به درستی وارد کنید";
        email.style.boxShadow = "0 0 5px 2px rgb(228, 88, 88)";
        isFormOkay = false;
    }else if(genderMale.className=="Btngender" && genderWoman.className == "Btngender"){
        isGenderSelected = false;
        isFormOkay = false;
        genderMale.style.boxShadow = "0 0 5px 2px rgb(228, 88, 88)";
        genderWoman.style.boxShadow = "0 0 5px 2px rgb(228, 88, 88)";
        errorGender.innerText = "جنسیت را انتخاب کنید";
    }
    
    if(!isFormOkay){
        e.preventDefault();
    }


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



});

genderMale.addEventListener("click",function(){
    if(genderMale.className == "Btngender"){
        if(genderWoman.className =="Btngender"){
            genderMale.setAttribute("class","Btngender BtngenderSelected");
        }else{
            genderWoman.setAttribute("class","Btngender");
            genderMale.setAttribute("class","Btngender BtngenderSelected");
        }
        genderMale.style.boxShadow = "none";
        genderWoman.style.boxShadow = "none";
        isGenderSelected = true;
        
    }else{
        genderMale.setAttribute("class","Btngender");
        isGenderSelected = false;
    }
});

genderWoman.addEventListener("click",function(){
    if(genderWoman.className == "Btngender"){
        if(genderMale.className =="Btngender"){
            genderWoman.setAttribute("class","Btngender BtngenderSelected");
        }else{
            genderMale.setAttribute("class","Btngender");
            genderWoman.setAttribute("class","Btngender BtngenderSelected");
        }
        genderMale.style.boxShadow = "none";
        genderWoman.style.boxShadow = "none";
        isGenderSelected = true;
    }else{
        genderWoman.setAttribute("class","Btngender");
        isGenderSelected = false;
    }
});

