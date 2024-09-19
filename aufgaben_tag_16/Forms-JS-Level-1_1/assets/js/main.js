    function doubleNumber() {
        let input = document.getElementById('zahlinput').value;
        
        let doubled = parseInt(input) * 2;
        
        document.getElementById('output').innerText = doubled;
    }

