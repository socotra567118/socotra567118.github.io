const upper_cyrillic_to_upper_roman_dictionary = {"А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ё": "Yo", "Ж": "Zh", "З": "Z", "И": "I", "Й": "J", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "C", "Т": "T", "У": "U", "Ф": "F", "Х": "Kh", "Ц": "Cz", "Ч": "Ch", "Ш": "Sh", "Щ": "Shh", "Ъ": "", "Ы": "Y", "Ь": "", "Э": "E", "Ю": "Yu", "Я": "Ya", "Ѓ": "G", "Ґ": "G", "Є": "Ye", "S": "Z", "Ј": "J", "Ї": "Yi", "Ќ": "K", "Љ": "L", "Њ": "N", "Ў": "U", "Џ": "Dh"}

const lower_cyrillic_to_upper_roman_dictionary = {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 'c', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'cz', 'ч': 'ch', 'ш': 'sh', 'щ': 'shh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya', 'ѓ': 'g', 'ґ': 'g', 'є': 'ye', 's': 'z', 'ј': 'j', 'ї': 'yi', 'ќ': 'k', 'љ': 'l', 'њ': 'n', 'ў': 'u', 'џ': 'dh'}

const upper_cyrillic_to_upper_roman_dictionary_keys = Object.keys(upper_cyrillic_to_upper_roman_dictionary);
const lower_cyrillic_to_upper_roman_dictionary_keys = Object.keys(lower_cyrillic_to_upper_roman_dictionary);

var change = document.getElementById('change');             // 바꾸기 버튼 변수
var clear = document.getElementById('clear');               // 지우기 버튼 변수
var copy = document.getElementById('copy');                 // 복사하기 버튼 변수
var isFromRoman = document.getElementById("isFromRoman")    // 로마자→키릴문자 체크박스 변수
var isToRoman = document.getElementById("isToRoman")        // 키릴문자→로마자 체크박스 변수
var cyrillicToRoman = document.getElementById("cyrillic_to_roman")  // 키릴문자→로마자 변환표 테이블

// 변환표 추가
// 키릴문자→로마자
// 키릴문자 갯수가 하드코딩되어 있지만 갯수가 변하지 않으므로 문제는 안 될 듯
for (let i = 0; i < 44; i+=2) {
    const tr = cyrillicToRoman.insertRow();

    const td1 = tr.insertCell(0);
    const td2 = tr.insertCell(1);
    const td3 = tr.insertCell(2);
    const td4 = tr.insertCell(3);
    const td5 = tr.insertCell(4);
    const td6 = tr.insertCell(5);
    const td7 = tr.insertCell(6);
    const td8 = tr.insertCell(7);

    td1.setAttribute("style", "text-align:center");
    td2.setAttribute("style", "text-align:center");
    td3.setAttribute("style", "text-align:center");
    td4.setAttribute("style", "text-align:center");
    td5.setAttribute("style", "text-align:center");
    td6.setAttribute("style", "text-align:center");
    td7.setAttribute("style", "text-align:center");
    td8.setAttribute("style", "text-align:center");

    td1.innerText = upper_cyrillic_to_upper_roman_dictionary_keys[i];
    td2.innerText = upper_cyrillic_to_upper_roman_dictionary[upper_cyrillic_to_upper_roman_dictionary_keys[i]];
    td3.innerText = upper_cyrillic_to_upper_roman_dictionary_keys[i + 1];
    td4.innerText = (upper_cyrillic_to_upper_roman_dictionary[upper_cyrillic_to_upper_roman_dictionary_keys[i + 1]] === "") ? "-" : upper_cyrillic_to_upper_roman_dictionary[upper_cyrillic_to_upper_roman_dictionary_keys[i + 1]];
    td5.innerText = lower_cyrillic_to_upper_roman_dictionary_keys[i];
    td6.innerText = lower_cyrillic_to_upper_roman_dictionary[lower_cyrillic_to_upper_roman_dictionary_keys[i]];
    td7.innerText = lower_cyrillic_to_upper_roman_dictionary_keys[i + 1];
    td8.innerText = (lower_cyrillic_to_upper_roman_dictionary[lower_cyrillic_to_upper_roman_dictionary_keys[i + 1]] === "") ? "-" : lower_cyrillic_to_upper_roman_dictionary[lower_cyrillic_to_upper_roman_dictionary_keys[i + 1]];

    console.log(upper_cyrillic_to_upper_roman_dictionary_keys[i]);
}

// 로마자-키릴문자 변환
change.addEventListener('click', function(){
    const textBox = document.getElementById("from").value;          // 사용자가 입력한 값 가져오기
    const splitedTextBox = textBox.split("");                       // 사용자가 입력한 값 알파벳 단위로 분해하기
    const isFrom = isFromRoman.checked;                             // 로마자→키릴문자 체크박스 체크 여부
    var changedValue = "";                                          // 변경된 값을 담을 문자열

    if (isFrom) {
        // 로마자→키릴문자에 체크되어 있으면
        changedValue = changeRomanToCyrillic(splitedTextBox);
    } else {
        // 키릴문자→로마자에 체크되어 있으면
        changedValue = changeCyrillicToRoman(splitedTextBox);
    }

    document.getElementById("to").value = changedValue;
})

// 키릴문자→로마자 변환 함수
function changeCyrillicToRoman(splitedValue) {
    var changedValue = "";                                          // 변경된 값을 담을 문자열

    // 루프 돌면서 문자열에 변경된 값 담기
    for (const alphabet of splitedValue) {
        const alphabetUnicode = alphabet.charCodeAt(0);     // 유니코드로 변환

        // 키릴문자 범위 안에 있는지 확인
        if ((alphabetUnicode >= 1024) && (alphabetUnicode <= 1279)) {
            // 키릴문자면
            if (alphabet === alphabet.toUpperCase()) {
                // 대문자라면 대문자로
                changedValue += upper_cyrillic_to_upper_roman_dictionary[alphabet];
            } else if (alphabet === alphabet.toLowerCase()) {
                // 소문자라면 소문자로
                changedValue += lower_cyrillic_to_upper_roman_dictionary[alphabet];
            } 
        } else {
            // 키릴문자가 아니면 똑같이 출력
            changedValue += alphabet;
        }
    }

    return changedValue
}

// 로마자→키릴문자 변환함수
function changeRomanToCyrillic(splitedValue) {
    var changedValue = "";                                          // 변경된 값을 담을 문자열

    // 루프 돌면서 문자열에 변경된 값 담기
    for (const alphabet of splitedValue) {
        const alphabetUnicode = alphabet.charCodeAt(0);     // 유니코드로 변환

        // 키릴문자 범위 안에 있는지 확인
        if ((alphabetUnicode >= 1024) && (alphabetUnicode <= 1279)) {
            // 키릴문자면
            if (alphabet === alphabet.toUpperCase()) {
                // 대문자라면 대문자로
                changedValue += upper_cyrillic_to_upper_roman_dictionary[alphabet];
            } else if (alphabet === alphabet.toLowerCase()) {
                // 소문자라면 소문자로
                changedValue += lower_cyrillic_to_upper_roman_dictionary[alphabet];
            } 
        } else {
            // 키릴문자가 아니면 똑같이 출력
            changedValue += alphabet;
        }
    }

    return changedValue
}

// 입력 내용 지우기
clear.addEventListener('click', function() {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
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

// 로마자→키릴문자, 키릴문자→로마자 체크박스 하나만 선택되게 하기
isFromRoman.addEventListener('click', function() {
    if (isFromRoman.checked) {
        isToRoman.checked = false;
    } else {
        isToRoman.checked = true;
    }
})

isToRoman.addEventListener('click', function() {
    if (isToRoman.checked) {
        isFromRoman.checked = false;
    } else {
        isFromRoman.checked = true;
    }
})