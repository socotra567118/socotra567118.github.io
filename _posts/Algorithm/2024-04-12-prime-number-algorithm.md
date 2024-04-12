---
title: 소수 관련 알고리즘
date: 2024-04-12 18:36:00 +0900
categories: [Algorithm, Others]
tags: [Algorithm, Others, Python]
published: false
---

[<b>소수</b>](https://ko.wikipedia.org/wiki/소수_(수론))란 **2보다 큰 자연수 중에서 1과 자기 자신을 말고는 약수가 없는 자연수**이다.

## 소수 판정 알고리즘 1

```python
def is_prime_number(number) -> bool:
    for i in range(2, number):
        if number % i == 0:
            return False
    return True
```

## 소수 판정 알고리즘  2

```python
import math

def is_prime_number(number) -> bool:
    for i in range(2, int(math.sqrt(number)) + 1):
        if number % i == 0:
            return False
    return True
```

## 에라토스테네스의 체

1. 2부터 N까지의 모든 자연수를 나열한다.
2. 남은 수 중에서 아직 제거되지 않은 가장 작은 수 i를 찾는다.
3. 남은 수 중에서 i의 배수를 모두 제거한다. (단, i는 제거하지 않는다).
4. 더 이상 반복할 수 없을 때까지 2번과 3번의 과정을 반복한다.

```python
import math

number = int(input())   # 2부터 number까지의 모든 수에 대해서 소수 판별
prime_numbers = [True for i in range(number + 1)]

for i in range(2, int(math.sqrt(number)) + 1):
    if prime_numbers[i]:
        j = 2
        while i * j <= number:
            prime_numbers[i * j] = False
            j += 1

for i in range(2, number + 1):
    if prime_numbers[i]:
        print(i, end=" ")
```
