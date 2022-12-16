##################################################
# 러시아어 로마자 표기법
#
# 국제 표준: ГОСТ GOST 16876-71
# ALA-LC: 미국 도서관 협회와 미국 국회 도서관 제정 표기법
# BGN/PCGN: 미국의 Board on Geographic Names와 영국의 Permanent Committe on Geographical names for British Official Use에서 제정. 영미권 대중매체에서 널리 사용
##################################################

##################################################
# 이 알고리즘은 GOST 7.79-2000 System B를 사용
##################################################

# 키릴 문자 대문자를 로마자 대문자로 변환
upper_cyrillic_to_upper_roman_dictionary = {"А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ё": "Yo", "Ж": "Zh", "З": "Z", "И": "I", "Й": "J", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "п", "Р": "R", "С": "C", "Т": "T", "У": "U", "Ф": "F", "Х": "Kh", "Ц": "Cz", "Ч": "Ch", "Ш": "Sh", "Щ": "Shh", "Ъ": "", "Ы": "Y", "Ь": "", "Э": "E", "Ю": "Yu", "Я": "Ya", "Ѓ": "G", "Ґ": "G", "Є": "Ye", "S": "Z", "Ј": "J", "Ї": "Yi", "Ќ": "K", "Љ": "L", "Њ": "N", "Ў": "U", "Џ": "Dh"}

if_the_language_is_bulgarian_upper_to_upper_roman = {"Ъ": "A"}

# 키릴 문자 소문자를 로마자 소문자로 변환

lower_cyrillic_to_lower_roman_dictionary_keys = []
lower_cyrillic_to_lower_roman_dictionary_values = []

for key, value in upper_cyrillic_to_upper_roman_dictionary.items():
    lower_cyrillic_to_lower_roman_dictionary_keys.append(key.lower())
    lower_cyrillic_to_lower_roman_dictionary_values.append(value.lower())

lower_cyrillic_to_lower_roman_dictionary = dict(zip(lower_cyrillic_to_lower_roman_dictionary_keys, lower_cyrillic_to_lower_roman_dictionary_values))
if_the_language_is_bulgarian_lower_to_lower_roman = {"ъ": "a"}
