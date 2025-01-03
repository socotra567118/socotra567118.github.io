---
layout: single
title: (Python) 프로그래머스 181949번 대소문자 바꿔서 출력하기
categories: [Python]
tags: [Python, Programmers]
toc: false
---

프로그래머스 181949번 대소문자 바꿔서 출력하기

```python
str = input()
result = ""
for char in str:
    if char.isupper():
        result += char.lower()
    else:
        result += char.upper()
print(result)
```