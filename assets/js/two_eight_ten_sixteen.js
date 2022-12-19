const fromValue = document.getElementById("from_value");    // 원본 진법 드롭다운 변수
const toValue = document.getElementById("to_value");        // 변환 진법 드롭다운 변수
const clear = document.getElementById("clear");             // 지우기 버튼 변수
const copy = document.getElementById("copy");               // 복사하기 버튼 변수
const change = document.getElementById("change");           // 바꾸기 버튼 변수
const from_value = document.getElementById("from");         // 원본 값 변수
const to_value = document.getElementById("to");             // 변환 값 변수

const decimal_menu = {"0": "2", "1": "8", "2": "10", "3": "16"}

var from = "10";    // 기본값 10진수를
var to = "16";      // 기본값 16진수로 변환 하는 변수 생성

// 드롭다운에서 값이 바뀌면 바뀐 값을 저장
fromValue.addEventListener("change", function() {
    from = decimal_menu[fromValue.value];
})

toValue.addEventListener("change", function() {
    to = decimal_menu[toValue.value];
})

// 지우기 버튼
clear.addEventListener('click', function() {
    to_value.value = "";
    from_value.value = "";
})

// 바꾸기 버튼
change.addEventListener("click", function() {
    if (from === to) {
        to_value.value = from_value.value;
    } else if (from === "2" && to === "8") {
        to_value.value = two_eight(from_value.value);
    } else if (from === "2" && to === "10") {
        to_value.value = two_ten(from_value.value);
    } else if (from === "2" && to === "16") {
        to_value.value = two_sixteen(from_value.value);
    } else if (from === "8" && to === "2") {
        to_value.value = eight_two(from_value.value);
    } else if (from === "8" && to === "10") {
        to_value.value = eight_ten(from_value.value);
    } else if (from === "8" && to === "16") {
        to_value.value = eight_sixteen(from_value.value);
    } else if (from === "10" && to === "2") {
        to_value.value = ten_two(from_value.value);
    } else if (from === "10" && to === "8") {
        to_value.value = ten_eight(from_value.value);
    } else if (from === "10" && to === "16") {
        to_value.value = ten_sixteen(from_value.value);
    } else if (from === "16" && to === "2") {
        to_value.value = sixteen_two(from_value.value);
    } else if (from === "16" && to === "8") {
        to_value.value = sixteen_eight(from_value.value);
    } else if (from === "16" && to === "10") {
        to_value.value = sixteen_ten(from_value.value);
    }
})

// 클립보드 복사
copy.addEventListener('click', function() {
    const textBox = document.getElementById("to").value;

    navigator.clipboard.writeText(textBox)
        .then(() => {
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
})

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
    return parseInt(number).toString(2);
}

// 10진수에서 8진수로
function ten_eight(number) {
    return parseInt(number).toString(8);
}

// 10진수에서 16진수로
function ten_sixteen(number) {
    return parseInt(number).toString(16);
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
