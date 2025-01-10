---
layout: single
title: Java - 프로그래머스 181952번 문자열 출력하기
categories: [Algorithm]
tags: [Java, Programmers]
---

## 문제 설명
[프로그래머스 181952번 문자열 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181952?language=java)

문자열 `str`이 주어질 때, `str`을 출력하는 코드를 작성해 보세요.

## 제한 사항
- 1 ≤ `str`의 길이 ≤ 1,000,000
- `str`에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

## 입출력 예시

### 예시 1

#### 입력 1

```plaintext
HelloWorld!
```

#### 출력 1

```plaintext
HelloWorld!
```

## 코드 구현

```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        System.out.println(a);
    }
}
```