
let icon= document.querySelector("#icon");
    icon.addEventListener("click", signinandsignup);
    function signinandsignup(event){
        event.preventDefault();
    console.log("icon");
    }

let signin = document.querySelectorAll(".signin");
signin.forEach(function (el,i){
    // console.log(el);
    el.addEventListener("click", signinwindow);
function signinwindow(event){
    event.preventDefault;
    console.log("signin window");
}
});

let signup = document.querySelectorAll(".signup");
    signup.forEach(function(el,i){
        // console.log(el);
        el.addEventListener("click", signupwindow);
    function signupwindow(event){
       event.preventDefault;
       console.log("signup window");
   }
})


let verify_login = document.querySelector("#verify-login");
verify_login.addEventListener("click", verifylogin);
    function verifylogin(event){
        event.preventDefault();
    console.log("signup window");
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
        }
        
let place= document.getElementById("location");
    place.addEventListener("input", locationinder);
          function locationinder() {
            let input = document.getElementById("location");
            let filter = input.value.toUpperCase();
            let ul = document.getElementById("goa");
            let li = ul.getElementsByTagName("li");
            for (let i = 0; i < li.length; i++) {
             let x = li[i];
              if (x.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
              } else {
                li[i].style.display = "none";
              }
            }
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

          


   



    


    

   


   