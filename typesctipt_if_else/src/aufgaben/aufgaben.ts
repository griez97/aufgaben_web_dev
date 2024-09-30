// Conditionals-TS-Level-2_3

function diff(num1:number, num2:number){
    if(num1 / num2 > 27){
        let doubleReturn = (num1 / num2) * 2;
        console.log(doubleReturn);
        
    } else{
        console.log(num1 / num2);
        
    }
}

diff(500, 3);


// Conditionals-TS-Level-2_4

function randomNumber() {
    const numX = Math.floor(Math.random() * 77) + 1;
    const numY = Math.floor(Math.random() * 77) + 1;

    console.log(`Erste Zahl: ${numX}, Zweite Zahl: ${numY}`);

    switch (true) {
        case numX === numY:
            console.log('Was für ein Zufall');
            break;
        case numX > numY:
            console.log('Erste Zahl größer');
            break;
        case numY > numX:
            console.log('Zweite Zahl größer');
            break;
    }
}

randomNumber();


// Failed to load resource: the server responded with a status of 404 (Not Found)