function fizzbuzz(n) {
    let eredmeny = ""
    for (let index = 1; index <= n; index++) {
        eredmeny += fizzbuzzErtek(index)
        if (index < n) {
            eredmeny += ","

        }
    }
    return eredmeny
}
function fizzbuzzErtek(n) {
    let eredmeny = ""
    if (n % 15 == 0) {
        eredmeny += "fizzbuzz"
    }
    else if (n % 5 == 0) {
        eredmeny += "buzz"
    }
    else if (n % 3 == 0) {
        eredmeny += "fizz"
    } else {
        eredmeny += n
    }
    return eredmeny
}