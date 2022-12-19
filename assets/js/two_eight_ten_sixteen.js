// 2진수에서 8진수로
function two_eight(number) {
    return parseInt(number, 2).toString(8);
}

// 2진수에서 10진수로
function two_ten(number) {
    return String(parseInt(number, 2));
}

// 2진수에서 16진수로
function two_sixteen(number) {
    return parseInt(number, 2).toString(16);
}

// 8진수에서 2진수로
function eight_two(number) {
    return parseInt(number, 8).toString(2);
}

// 8진수에서 10진수로
function eight_ten(number) {
    return String(parseInt(number, 8));
}

// 8진수에서 16진수로
function eight_sixteen(number) {
    return parseInt(number, 8).toString(16);
}

// 10진수에서 2진수로
function ten_two(number) {
    return number.toString(2);
}

// 10진수에서 8진수로
function ten_eight(number) {
    return number.toString(8);
}

// 10진수에서 16진수로
function ten_sixteen(number) {
    return number.toString(16);
}

// 16진수에서 2진수로
function sixteen_two(number) {
    return parseInt(number, 16).toString(2);
}

// 16진수에서 8진수로
function sixteen_eight(number) {
    return parseInt(number, 16).toString(8);
}

// 16진수에서 10진수로
function sixteen_ten(number) {
    return String(parseInt(number, 16));
}
