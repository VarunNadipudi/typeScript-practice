function isPrime(num) {
    var flag = false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            flag = true;
            break;
        }
    }
    return flag;
}
function displayPrime(num) {
    var count = 0;
    var value = 2;
    while (count != num) {
        if (!isPrime(value)) {
            console.log(value);
            count++;
        }
        value++;
    }
}
displayPrime(10);
