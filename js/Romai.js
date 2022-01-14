function romaiSzamok(n) {
    let maradek10 = n % 10
    let eredmeny = ""
    let tizesekSzama = Math.floor(n / 10)
    for (let index = 0; index < tizesekSzama; index++) {
        eredmeny += "X"
    }

    eredmeny += tizalatt(maradek10)
    return eredmeny
}

function tizalatt(n) {
    let tizalatt = ""
    let maradek5 = n % 5
    if (Math.floor(n / 5) > 0) {
        tizalatt  += "V"
    }

    for (let index = 1; index <= maradek5; index++) {
        tizalatt  += "I"
    }

    if (maradek5 === 4) {
        tizalatt  = "IV"
    }
    if (n%10=== 9) {
        tizalatt  = "IX"
    }
    console.log(tizalatt)
    return tizalatt
}
