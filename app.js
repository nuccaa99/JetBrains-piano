document.addEventListener("keydown", function (e) {
    const keyName = e.key.toUpperCase();
    if(keyName==='A') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("A.mp3");
        audio.play();
    } else if(keyName==='S') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("S.mp3");
        audio.play();
    } else if(keyName==='D') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("D.mp3");
        audio.play();
    } else if(keyName==='F') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("F.mp3");
        audio.play();
    } else if(keyName==='G') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("G.mp3");
        audio.play();
    } else if(keyName==='H') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("H.mp3");
        audio.play();
    } else if(keyName==='J') {
        console.log(`The '${keyName}' key in pressed.`)
        let audio = new Audio("J.mp3");
        audio.play();
    } else if(keyName==='W') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("W.mp3");
        audio.play();
    } else if(keyName==='E') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("E.mp3");
        audio.play();
    } else if(keyName==='T') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("T.mp3");
        audio.play();
    }else if(keyName==='Y') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("Y.mp3");
        audio.play();
    } else if(keyName==='U') {
        console.log(`The '${keyName}' key in pressed.`);
        let audio = new Audio("U.mp3");
        audio.play();
    } else {
        console.log("Please press the piano keys!!")
    }
})


