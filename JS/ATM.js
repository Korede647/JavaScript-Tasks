

function withdrawalATM(n) {
    let bill100 = 0
    let bill20 = 0
    let bill9 = 0
    let bill1 = 0

    if (n / 100 >= 1){
        bill100 = Math.floor(n / 100);
        n = n % (bill100 * 100)
    }

    if (n / 20 >= 1){
        bill20 = Math.floor(n / 20);
        n = n % (bill20 * 20)
    }

    if (n / 9 >= 1){
        bill9 = Math.floor(n / 9);
        n = n % (bill9 * 9)
    }

    bill1 = n;
    console.log([bill100, bill20, bill9, bill1]);
}

withdrawalATM(1690)