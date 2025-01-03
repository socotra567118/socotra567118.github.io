---
layout: single
title: (Java) 프로그래머스 181950번 문자열 반복해서 출력하기
categories: [Java]
tags: [Java, Programmers]
toc: false
---

프로그래머스 181950번 문자열 반복해서 출력하기

```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();
        
        for (int i = 0; i < n; i += 1) {
            System.out.print(str);
        }
    }
}
```