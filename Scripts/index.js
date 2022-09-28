
    let icon= document.querySelector("#icon");
    icon.addEventListener("click", iconn);

    function iconn(event){
        event.preventDefault();
    // console.log("hi");
    document.getElementById("popup").style.visibility="visible";

    }

    let signin=document.querySelector("#signin");
    signin.addEventListener("click", signinn);

    function signinn(event){
        event.preventDefault();
        document.getElementById("popup").style.visibility="hidden";
       // console.log("hi");
       document.getElementById("signinpopup").style.visibility="visible";

    }

    let signup= document.querySelector("#sign-up-instred");
    signup.addEventListener("click", signupp);

    function signupp(event){
        event.preventDefault();
       // console.log("hi");
       document.getElementById("signinpopup").style.visibility="hidden";
       document.getElementById("signuppopup").style.visibility="visible";

    }

    let verify= document.querySelector("#verify");
    verify.addEventListener("click", verfiyy);

    function verfiyy(event){
        event.preventDefault();
       // console.log("hi");
       document.getElementById("signuppopup").style.visibility="hidden";
    
     let getData={
        first: document.getElementById("first-name").innerText,
        last: document.querySelector("#last-name").innerHTML,
        email:document.querySelector("#email").innerHTML,
        mobile: document.querySelector(".mobile").innerHTML,
        countrycode: document.querySelector(".countrycode").innerHTML,
        password: document.querySelector("#password").innerHTML,
       }
        console.log(getData);
        

    }

   

   
   
   


    

