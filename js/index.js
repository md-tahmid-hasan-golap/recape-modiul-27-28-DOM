document.getElementById("btn_login").addEventListener("click", function(event){
    event.preventDefault()

     const numberInput = document.getElementById("number_input").value;
     
     const passwordInput = document.getElementById("password_input").value;
     const password = parseInt(passwordInput)

     if(numberInput.length === 11){
        if(password === 1234){
           window.location.href = "./main.html"
        }
        else{
            console.log("thik nai")
        }
     }
     else{
        console.log("invalid")
     }

})