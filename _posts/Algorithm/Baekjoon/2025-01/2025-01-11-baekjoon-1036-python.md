---
layout: single
title: 백준 1036번 보물 - Python
categories: [Algorithm]
tags: [Python, Baekjoon, Greedy]
use_math: true
published: false
---

## 문제 설명
[백준 2839번 보물](https://www.acmicpc.net/problem/1036)

옛날 옛적에 수학이 항상 큰 골칫거리였던 나라가 있었다. 이 나라의 국왕 김지민은 다음과 같은 문제를 내고 큰 상금을 걸었다.

길이가 N인 정수 배열 A와 B가 있다. 다음과 같이 함수 S를 정의하자.

$S = A[0] × B[0] + ... + A[N-1] × B[N-1]$

S의 값을 가장 작게 만들기 위해 A의 수를 재배열하자. 단, B에 있는 수는 재배열하면 안 된다.

S의 최솟값을 출력하는 프로그램을 작성하시오.

**문제 요약:**
- 입력: 첫째 줄에 N이 주어진다. 둘째 줄에는 A에 있는 N개의 수가 순서대로 주어지고, 셋째 줄에는 B에 있는 수가 순서대로 주어진다. N은 50보다 작거나 같은 자연수이고, A와 B의 각 원소는 100보다 작거나 같은 음이 아닌 정수이다.
- 출력: 첫째 줄에 S의 최솟값을 출력한다.

## 제한 사항
- 시간 제한: 2초
- 메모리 제한: 128MB

## 입출력 예시

### 예시 1

#### 입력 1

```plaintext
5
1 1 1 6 0
2 7 8 3 1
```

#### 출력 1

```plaintext
18
```

### 예시 2

#### 입력 2

```plaintext
3
1 1 3
10 30 20
```

#### 출력 2

```plaintext
80
```

### 예시 3

#### 입력 3

```plaintext
9
5 15 100 31 39 0 0 3 26
11 12 13 2 3 4 5 9 1
```

#### 출력 3

```plaintext
528
```

### 입출력 예 설명 1

## 문제 해결 전략

### 1. 접근 방법
- `A`와 `B`의 각각의 가장 큰 값은 가장 작은 값끼리 곱해야 한다.
- 따라서, 한 배열은 오름차순, 다른 한 배열은 내림차순으로 정렬한 뒤, 같은 인덱스끼리 곱한다.

## 코드 구현

```python
n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

a.sort()
b.sort(reverse=True)

answer = 0

for i in range(n):
    answer += a[i] * b[i]

print(answer)
```

### 시간 복잡도

* `a.sort()`와 `b.sort(reverse=True)`의 시간 복잡도는 $O(N\log N)$ 이다.
* `for i in range(n)` 반복문의 시간 복잡도는 $O(N)$ 이다.
* 따라서, 전체 시간 복잡도는 $O(N\log N) + O(N) = O(N\log N)$ 이다.