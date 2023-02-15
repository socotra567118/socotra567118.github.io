---
title: 마크다운 문법, HTML에서 수식 사용하기
date: 2023-02-14 23:24:00 +0900
categories: [Others, Others Tutorial]
tags: [Others, Markdown, HTML]
---
먼저, 아래의 HTML 코드를 삽입한다.

```html
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
    });
</script>
<script src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
```
