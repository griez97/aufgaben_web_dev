function intro3(name, alter, stadt) {
    console.log(`${name}, ${alter}, ${stadt}`);
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${alter} Jahre alt. Ich komme aus ${stadt}.`);
}


function intro4(name = "Type <in order> your: Name", alter = "age", stadt = "and where you live") {
    if (name === "Type <in order> your: Name" && alter === "age" && stadt === "and where you live") {
        console.log(`${name}, ${alter}, ${stadt}`);
    } else {
        console.log(`Hallo, mein Name ist ${name}. Ich bin ${alter} Jahre alt. Ich komme aus ${stadt}.`);
    }
}