---
layout: single
title: 백준 11047번 동전 0 - Python
categories: [Algorithm]
tags: [Python, Baekjoon, Greedy]
use_math: true
---

## 문제 설명
[백준 11047번 동전 0](https://www.acmicpc.net/problem/11047)

준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.

동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

**문제 요약:**
- 입력: 
  - 첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
  - 둘째 줄부터 N개의 줄에 동전의 가치 $A_i$가 오름차순으로 주어진다. (1 ≤ $A_i$ ≤ 1,000,000, $A_1$ = 1, i ≥ 2인 경우에 $A_i$는 $A_{i-1}$의 배수)
- 출력: 첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력한다.

## 제한 사항
- 시간 제한: 1초
- 메모리 제한: 256MB

## 입출력 예시

### 예시 1

#### 입력 1

```plaintext
10 4200
1
5
10
50
100
500
1000
5000
10000
50000
```

#### 출력 1

```plaintext
6
```

### 예시 2

#### 입력 2

```plaintext
10 4790
1
5
10
50
100
500
1000
5000
10000
50000
```

#### 출력 2

```plaintext
12
```

### 입출력 예 설명 1

## 문제 해결 전략

### 1. 접근 방법
- 동전의 가치 리스트를 내림차순으로 정렬한다.
- 가치가 큰 동전부터 K로 나누며 필요한 동전의 개수를 계산한다.

### 2. 주요 포인트
- `가치가 큰` 동전부터 사용해야 한다.

## 코드 구현

```python
n, k = map(int, input().split())
coins = []

for i in range(n):
    coins.append(int(input()))

coins.sort(reverse=True)

answer = 0

for coin in coins:
    answer += k // coin
    k %= coin

print(answer)
```

### 시간 복잡도

* `coins.sort(reverse=True)`의 시간 복잡도는 $O(N\log N)$ 이다.
* `for coin in coins` 반복문의 시간 복잡도는 $O(N)$ 이다.
* 따라서, 전체 시간 복잡도는 $O(N\log N) + O(N) = O(N\log N)$ 이다.