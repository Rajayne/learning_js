function countdown(num) {
    let timer = setInterval(function(){
        num--;
    if (num <= 0) {
        clearInterval(timer);
        console.log("DONE!");
    } else {
        console.log(num);
    }
    }, 1000)
}

function randomGame() {
    let num;
    let count = 0;
    let timer = setInterval(function(){
        num = Math.random().toFixed(2);
        count++;
        console.log(`Count = ${count}, Num = ${num}`);
        if (num > .75) {
            clearInterval(timer);
            console.log(`It took ${count} try/tries.`);
        }
    }, 1000);
}

//No