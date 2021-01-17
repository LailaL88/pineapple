//FOR CHECKMRK
document.querySelector(".checkbox").addEventListener("click", function(){
    document.querySelector(".mycheckbox").classList.toggle("mycheckbox-clicked");
})


//ICON EFFECTS
const icons = document.querySelectorAll(".icon");

for (let icon of icons) {
    icon.addEventListener("mouseover", function(){
        icon.querySelector("i").style.color = "white";
        icon.querySelector("i").style.opacity = 1;
    })

    function changeIconColor(){
        icon.querySelector("i").style.color = "#" + 131821;
        icon.querySelector("i").style.opacity = 0.3;
    }

    icon.addEventListener("mouseout", changeIconColor)

    icon.addEventListener("click", function(e){
        if(e.target.className == "fab fa-facebook-f"){
            icon.style.backgroundColor =  "#2F4A80";
            icon.removeEventListener("mouseout", changeIconColor);
        }

        if(e.target.className == "fab fa-instagram"){
            icon.style.backgroundColor = "#8F2762";
            icon.removeEventListener("mouseout", changeIconColor);
        }

        if(e.target.className == "fab fa-twitter"){
            icon.style.backgroundColor =  "#177FBF";
            icon.removeEventListener("mouseout", changeIconColor);
        }

        if(e.target.className == "fab fa-youtube"){
            icon.style.backgroundColor =  "#CC0000";
            icon.removeEventListener("mouseout", changeIconColor);
        }
    })
}

//CHANGE COLOR OF INPUT ARROW

document.querySelector(".text-input-wrapper").addEventListener("mouseover", function(){
    document.querySelector(".arrow").setAttribute("src", "./img/ic_arrow.png");
})

document.querySelector(".text-input-wrapper").addEventListener("mouseout", function(){
    document.querySelector(".arrow").setAttribute("src", "./img/ic_arrow.svg");
})


//FORM VALIDATION

function validate(e){
    let email = document.querySelector(".text-input").value;
    const message = document.querySelector(".message");
    
    function styleErrorMsg(){
        message.style.color = "red";
        message.style.border = "1px solid red";
    }

    re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(email) == false && email !== ""){
        message.innerText = "Please provide a valid e-mail address";
        styleErrorMsg();
        e.preventDefault();
        return false;
    }

    if (email == ""){
        message.innerText = "Email address is required";
        styleErrorMsg();
        e.preventDefault();
        return false;
    }

    if (document.querySelector(".checkbox").checked == false){
        message.innerText = "You must accept the terms and conditions";
        styleErrorMsg();
        e.preventDefault();
        return false;
    }

    let emailEnding = email.substr(email.length - 3);

    if (emailEnding == ".co"){
        message.innerText = "We are not accepting subscriptions from Colombia emails";
        styleErrorMsg();
        e.preventDefault();
        return false;
    }

    if (message.innerText == ""){
        document.querySelector(".form").style.display = "none";
        document.querySelector(".success-message").style.display = "block";
    }

    const successMsg = " <img src='./img/cup.png' alt='cup' class='cup'><h3>Thanks for subscribing!</h3><p>You have successfully subscribed to our email listing. Check your email for the discount code.</p>";
    localStorage.setItem("message",successMsg);
}

const success = localStorage.getItem("message");
document.querySelector(".success-message").innerHTML = success;
localStorage.removeItem("message");

if (success){
    document.querySelector(".form").style.display = "none";
}

