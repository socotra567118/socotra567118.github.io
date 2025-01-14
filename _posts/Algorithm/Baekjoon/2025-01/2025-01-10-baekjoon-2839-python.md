---
layout: single
title: 백준 2839번 설탕 배달 - Python
categories: [Algorithm]
tags: [Python, Baekjoon, Greedy]
use_math: true
---

## 문제 설명
[백준 2839번 설탕 배달](https://www.acmicpc.net/problem/2839)

상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.

상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.

**문제 요약:**
- 입력: 첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)
- 출력: 상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.

## 제한 사항
- 시간 제한: 1초
- 메모리 제한: 128MB

## 입출력 예시

### 예시 1

#### 입력 1

```plaintext
18
```

#### 출력 1

```plaintext
4
```

### 예시 2

#### 입력 2

```plaintext
4
```

#### 출력 2

```plaintext
-1
```

### 예시 3

#### 입력 3

```plaintext
6
```

#### 출력 3

```plaintext
2
```

### 예시 4

#### 입력 4

```plaintext
9
```

#### 출력 4

```plaintext
3
```

### 예시 5

#### 입력 5

```plaintext
11
```

#### 출력 5

```plaintext
3
```

## 문제 해결 전략

### 1. 접근 방법
- `5 kg 봉지를 최대한 많이` 사용해야 한다.
- 5 kg 봉지를 최대한 많이 사용하는 경우부터 `5 kg 봉지의 개수를 하나씩 줄여가면서 3 kg 봉지로 채울 수 있는지 확인`한다.
- 설탕이 5 kg, 3 kg 봉지로 나누어지지 않으면 `-1을 반환`한다.

## 코드 구현

```python
n = int(input())

number_of_bags = 0

while True:
    if N % 5 == 0:
        number_of_bags += N // 5
        print(number_of_bags)
        break
    
    N -= 3
    number_of_bags += 1
    
    if N < 0:
        print(-1)
        break
```

* 반복마다 `N`에서 `3`을 빼면서 `N`을 줄이고, `number_of_bags`에 1을 더한다.
* `N`이 5가 되는 경우, `number_of_bags`에 `N`을 5로 나눈 몫을 더한 후, 반복문을 빠져나오고 `number_of_bags`를 출력한다. 

### 시간 복잡도

* 시간 복잡도: $O(N/3)$

### 개선할 점

* `while 문`이 실행될 때마다 3을 뺐지만, 3대신 5를 뺀다면, 시간 복잡도를 $O(N/5)$로 만들 수 있다.
* 코드를 더 짧고 간결하게 할 수 있다.

```python
def sugar_delivery(n):
    # 5kg 봉지 개수의 최대값부터 시작
    for five_bags in range(n // 5, -1, -1):
        remaining = n - (five_bags * 5)
        # 남은 설탕이 3으로 나누어 떨어지면 정답
        if remaining % 3 == 0:
            three_bags = remaining // 3
            return five_bags + three_bags
    return -1  # 정확히 나눌 수 없는 경우

# 입력값 처리 및 출력
n = int(input())
print(sugar_delivery(n))
```