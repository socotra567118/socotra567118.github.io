---
layout: single
title: (Java) 프로그래머스 181949번 대소문자 바꿔서 출력하기
categories: [Java]
tags: [Java, Programmers]
toc: false
---

프로그래머스 181949번 대소문자 바꿔서 출력하기

```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String result = "";
        
        for (Character x : a.toCharArray()) {
            if (Character.isLowerCase(x)) {
                result += Character.toUpperCase(x);
            } else {
                result += Character.toLowerCase(x);
            }
        }
        
        System.out.println(result);
    }
}
```