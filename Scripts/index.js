
let icon= document.querySelector("#icon");
    icon.addEventListener("click", signinandsignup);
    function signinandsignup(event){
        event.preventDefault();
    // console.log("icon");
    document.getElementById("user-details").style.visibility="visible";
    }

let signin = document.querySelectorAll(".signin");
signin.forEach(function (el,i){
    // console.log(el);
    el.addEventListener("click", signinwindow);
function signinwindow(event){
    event.preventDefault;
    //console.log("signin window");
    document.getElementById("user-details").style.visibility="hidden";
    document.getElementById("signinwindow").style.visibility="visible";
}
});

let signup = document.querySelector("#verify-login");
    signup.addEventListener("click", signupwindow);
    function signupwindow(event){
       event.preventDefault;
       //console.log("signup window");
       document.getElementById("signinwindow").style.visibility="hidden";
       document.getElementById("signupwindow").style.visibility="visible";
   }


let signin_cancel = document.querySelector("#signin-cancel");
    signin_cancel.addEventListener("click", signincancel);
        function signincancel(event){
            event.preventDefault();
            document.getElementById("signinwindow").style.visibility="hidden";

    }

    let sidepopup= document.querySelector("#sidepopup");
    sidepopup.addEventListener("click",sidepopupline);

    function sidepopupline(event){
        event.preventDefault();
        document.getElementById("threelinepop").style.visibility="visible";
    }

let close= document.querySelector("#close");
    close.addEventListener("click",closethis);

    function closethis(event){
        event.preventDefault();
        document.getElementById("threelinepop").style.visibility="hidden";
    }


let getDataArr=JSON.parse(localStorage.getItem("data")) || [];
let Verify_with_otp = document.querySelector("#verify");
        //console.log("Verify_with_otp");
        Verify_with_otp.addEventListener("click", getData);
        function getData(event){
            event.preventDefault;
            let getDataObj={
                mobile: document.getElementById("mobile").value,
                email: document.getElementById("email").value,
                pssword: document.getElementById("password").value,
                firstName: document.getElementById("first-name").value,
                lastName: document.getElementById("last-name").value,
            }
       // console.log(getDataObj);
        getDataArr.push(getDataObj);
        localStorage.setItem("data",JSON.stringify(getDataArr));
        document.getElementById("signupwindow").style.visibility="hidden";

        }
let calculate= document.getElementById("search");
          calculate.addEventListener("click", search);
          function search(event){
            event.preventDefault;
            let check_in=document.getElementById("check-in").value;
            let check_out=document.getElementById("check-out").value;
            let checkin_date= new Date(check_in);
            let checkout_date= new Date(check_out);
            let time = Math.abs(checkout_date-checkin_date);
            let total_days= Math.ceil(time / (1000 * 60 * 60 * 24));
            console.log(total_days);
            localStorage.setItem("days",total_days);
            
          }



          


   



    


    

   


   