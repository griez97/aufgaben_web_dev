function checkAge(){
    let age = document.getElementById("ageinput").value ;

    let over = "over 18";

    let under = "under 18";

    if(age >= 18){
        document.getElementById('output').innerText = over;
    } else{
        document.getElementById('output').innerText = under;
    }

}