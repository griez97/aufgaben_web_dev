function ageCount(){
    let input = document.getElementById("ageinput").value;

    let ageCalcu = 2024 - parseInt(input);
    
    document.getElementById('output').innerText = ageCalcu;
}
