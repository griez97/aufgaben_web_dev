function diff(){
    let age1 = document.getElementById("ageinput").value;
    let age2 = document.getElementById("ageinput2").value;

    let difference = age1 - age2;

    document.getElementById('output').innerText = difference;
}