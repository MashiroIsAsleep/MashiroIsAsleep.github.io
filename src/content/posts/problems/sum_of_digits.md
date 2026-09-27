---
title: sum_of_digits
published: 2026-08-27
description: 'A short yet interesting problem'
image: ''
tags: [Math]
category: 'Problems'
draft: false 
lang: 'en'
---

I recently came across a quite interesting short math question. The question goes:

### The problem

Find the sum of the digits of $$N^2$$, where

$$
N=\underbrace{888\cdots 8}_{2025\text{ digits}}.
$$

### The solution

The nice part of this problem is that we can set it up nicely such that the number is split into two blocks whose digit sums complement each other.

First, we have

$$
N=\frac{8}{9}(10^{2025}-1).
$$

Since $$2025=9\cdot225$$, the number $$10^{2025}-1$$ is divisible by $$10^9-1=999999999$$, which is also divisible by $$81$$. Therefore, we may know that

$$
\varphi=\frac{64}{81}(10^{2025}-1)
$$

is an integer. We also have $$0<\varphi<10^{2025}$$. Using this auxiliary number, we can rewrite the square as

$$
\begin{aligned}
N^2
&=\frac{64}{81}(10^{2025}-1)^2\\
&=\varphi(10^{2025}-1)\\
&=(\varphi-1)10^{2025}+(10^{2025}-\varphi).
\end{aligned}
$$

Because $$0<10^{2025}-\varphi<10^{2025}$$, this expression places $$\varphi-1$$ in the left block and $$10^{2025}-\varphi$$ in the right block, padding the right block with leading zeros if needed. The blocks do not overlap, so their digit sums simply add.

Let $$S(x)$$ denote the sum of the decimal digits of $$x$$. Then

$$
S(N^2)=S(\varphi-1)+S(10^{2025}-\varphi).
$$

Furthermore, notice that

$$
S(\varphi-1)=S(\varphi)-1.
$$

Hence

$$
10^{2025}-\varphi=(10^{2025}-1)-(\varphi-1).
$$

Since the terms are set up so nicely, we now have

$$
\begin{aligned}
S(10^{2025}-\varphi)
&=9\cdot2025-S(\varphi-1)\\
&=9\cdot2025-S(\varphi)+1.
\end{aligned}
$$

Adding the two digit sums makes the unknown terms cancel:

$$
\begin{aligned}
S(N^2)
&=\bigl(S(\varphi)-1\bigr)
 +\bigl(9\cdot2025-S(\varphi)+1\bigr)\\
&=9\cdot2025\\
&=\boxed{18225}.
\end{aligned}
$$
