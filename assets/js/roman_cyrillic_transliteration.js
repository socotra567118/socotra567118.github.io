const upper_cyrillic_to_upper_roman_dictionary = {"А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ё": "Yo", "Ж": "Zh", "З": "Z", "И": "I", "Й": "J", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "п", "Р": "R", "С": "C", "Т": "T", "У": "U", "Ф": "F", "Х": "Kh", "Ц": "Cz", "Ч": "Ch", "Ш": "Sh", "Щ": "Shh", "Ъ": "", "Ы": "Y", "Ь": "", "Э": "E", "Ю": "Yu", "Я": "Ya", "Ѓ": "G", "Ґ": "G", "Є": "Ye", "S": "Z", "Ј": "J", "Ї": "Yi", "Ќ": "K", "Љ": "L", "Њ": "N", "Ў": "U", "Џ": "Dh"}

const lower_cyrillic_to_upper_roman_dictionary = {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'п', 'р': 'r', 'с': 'c', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'cz', 'ч': 'ch', 'ш': 'sh', 'щ': 'shh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya', 'ѓ': 'g', 'ґ': 'g', 'є': 'ye', 's': 'z', 'ј': 'j', 'ї': 'yi', 'ќ': 'k', 'љ': 'l', 'њ': 'n', 'ў': 'u', 'џ': 'dh'}

var change = document.getElementById('change');
change.addEventListener('click', function(){
    const textBox = document.getElementById("from").value;  // 사용자가 입력한 값 가져오기
    const splitedTextBox = textBox.split("");               // 사용자가 입력한 값 알파벳 단위로 분해하기
    var changedValue = "";                                  // 변경된 값을 담을 문자열

    // 루프 돌면서 문자열에 변경된 값 담기
    for (const alphabet of splitedTextBox) {
        if (alphabet === " ") {
            // 공란이면 똑같이 공란으로
            changedValue += " ";
        } else if (alphabet === alphabet.toUpperCase()) {
            // 대문자라면 대문자로
            changedValue += upper_cyrillic_to_upper_roman_dictionary[alphabet];
        } else if (alphabet === alphabet.toLowerCase()) {
            // 소문자라면 소문자로
            changedValue += lower_cyrillic_to_upper_roman_dictionary[alphabet];
        }
    }

    document.getElementById("to").value = changedValue;
})