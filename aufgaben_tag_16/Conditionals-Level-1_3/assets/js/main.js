function shisha(){
    let smokeAge = document.getElementById("ageinput").value ;

    let ageDontSmoke = "Du darfst noch nicht Shisha rauchen";
    let ageCanSmoke = "Ja, Du kannst Shisha rauchen";

    if(smokeAge < 18){
        document.getElementById("output").innerText = ageDontSmoke;
    } else {
        document.getElementById("output").innerText = ageCanSmoke;
    }
}