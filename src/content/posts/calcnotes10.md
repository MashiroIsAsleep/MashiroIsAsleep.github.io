---
title: CalcBC Ch10 - Infinite Sequences and Series
published: 2025-04-10
description: 'Notes on AP calcBC chapter 10'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: false
lang: 'en'
---

## Chapter 10: Infinite Sequences and Series

In this chapter, we delve into the theory and applications of infinite sequences and series. These topics are some of the most challenging in calculus but are fundamental for understanding how functions can be approximated by sums, how convergence is determined, and how error estimates are made. We will explore 15 topics, each building on the previous ideas, and include self–check problems to reinforce your understanding.

---

## 10.1 Defining Convergent and Divergent Infinite Series

An infinite series is expressed as
$$
\sum_{n=1}^\infty a_n,
$$
and it is said to converge if the sequence of partial sums
$$
S_N = \sum_{n=1}^N a_n
$$
approaches a finite limit as $$ N \to \infty $$. If the limit does not exist (or is infinite), the series diverges. This definition is foundational and underpins all convergence tests.

### Self–Check 1

**Problem:**  
Consider the geometric series
$$
\sum_{n=1}^\infty \frac{1}{2^n}.
$$  
Show that its sequence of partial sums converges and find its limit.

**Solution:**

1. The partial sum is given by the formula for a geometric series:
   $$
   S_N = \frac{a(1-r^N)}{1-r}, \quad \text{with } a=\frac{1}{2} \text{ and } r=\frac{1}{2}.
   $$
2. Thus,
   $$
   S_N = \frac{\frac{1}{2}(1-(1/2)^N)}{1-\frac{1}{2}} = 1 - \frac{1}{2^N}.
   $$
3. Taking the limit as $$ N\to\infty $$:
   $$
   \lim_{N\to\infty} S_N = 1 - 0 = 1.
   $$

So, the series converges and its sum is $$ 1 $$.

---

## 10.2 Working with Geometric Series

A geometric series has the form
$$
\sum_{n=0}^\infty ar^n.
$$
It converges if $$ |r| < 1 $$ with sum
$$
\frac{a}{1-r},
$$
and diverges if $$ |r| \ge 1 $$. Geometric series appear in many contexts, from finance to physics.

### Self–Check 2

**Problem:**  
Find the sum of the series
$$
\sum_{n=0}^\infty 3\left(0.5\right)^n.
$$

**Solution:**

Since $$ |0.5| < 1 $$, the series converges. Its sum is:
$$
\frac{3}{1-0.5} = \frac{3}{0.5} = 6.
$$

---

## 10.3 The nth Term Test for Convergence

The nth Term Test states that if
$$
\lim_{n\to\infty} a_n \neq 0,
$$
then the series
$$
\sum_{n=1}^\infty a_n
$$
diverges. Note, however, that if the limit is zero, the test is inconclusive.

### Self–Check 3

**Problem:**  
Determine whether the series
$$
\sum_{n=1}^\infty \frac{n}{n+1}
$$
converges or diverges.

**Solution:**

Calculate the limit:
$$
\lim_{n\to\infty} \frac{n}{n+1} = 1 \neq 0.
$$
By the nth Term Test, the series diverges.

---

## 10.4 Integral Test for Convergence

If $$ f(x) $$ is continuous, positive, and decreasing for $$ x\geq N $$ and $$ a_n = f(n) $$, then
$$
\sum_{n=N}^\infty a_n
$$
and
$$
\int_N^\infty f(x)\,dx
$$
either both converge or both diverge. This test is useful when comparing a series to an improper integral.

### Self–Check 4

**Problem:**  
Determine the convergence of the series
$$
\sum_{n=2}^\infty \frac{1}{n\ln n}
$$
using the integral test.

**Solution:**

Let $$ f(x)= \frac{1}{x\ln x} $$ for $$ x\ge 2 $$. Then
$$
\int_2^\infty \frac{1}{x\ln x}\,dx.
$$
Make the substitution $$ u=\ln x,\; du=\frac{dx}{x} $$, so the integral becomes:
$$
\int_{\ln2}^\infty \frac{1}{u}\,du,
$$
which diverges (since $$ \int \frac{1}{u}\,du = \ln|u| $$ and $$ \lim_{u\to\infty}\ln u = \infty $$). Hence, the series diverges.

---

## 10.5 Harmonic Series and p–Series

The harmonic series,
$$
\sum_{n=1}^\infty \frac{1}{n},
$$
diverges, even though its terms approach zero. More generally, a p–series
$$
\sum_{n=1}^\infty \frac{1}{n^p}
$$
converges if and only if $$ p>1 $$.

### Self–Check 5

**Problem:**  
Determine whether the series
$$
\sum_{n=1}^\infty \frac{1}{n^{0.9}}
$$
converges or diverges.

**Solution:**

Since $$ 0.9 < 1 $$, the p–series diverges.

---

## 10.6 Comparison Tests for Convergence

The Comparison Test involves comparing a series with another series whose convergence is known. If $$ 0\leq a_n\leq b_n $$ and $$ \sum b_n $$ converges, then $$ \sum a_n $$ converges. The Limit Comparison Test uses the limit
$$
\lim_{n\to\infty}\frac{a_n}{b_n}
$$
to draw similar conclusions.

### Self–Check 6

**Problem:**  
Use the comparison test to decide whether the series
$$
\sum_{n=1}^\infty \frac{1}{n^2+3}
$$
converges.

**Solution:**

For all $$ n\geq1 $$,
$$
\frac{1}{n^2+3} < \frac{1}{n^2}.
$$
Since $$ \sum \frac{1}{n^2} $$ converges (p–series with $$ p=2>1 $$), by the Comparison Test, the given series converges.

---

## 10.7 Alternating Series Test for Convergence

An alternating series has the form
$$
\sum_{n=1}^\infty (-1)^{n+1}a_n,
$$
with $$ a_n\geq0 $$. The Alternating Series Test states that if $$ a_n $$ is decreasing and
$$
\lim_{n\to\infty}a_n = 0,
$$
then the series converges.

### Self–Check 7

**Problem:**  
Determine whether the series
$$
\sum_{n=1}^\infty (-1)^{n+1}\frac{1}{n}
$$
converges.

**Solution:**

Here, $$ a_n=\frac{1}{n} $$ is decreasing and
$$
\lim_{n\to\infty}\frac{1}{n}=0.
$$
Thus, by the Alternating Series Test, the series converges (conditionally).

---

## 10.8 Ratio Test for Convergence

The Ratio Test evaluates
$$
L = \lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right|.
$$
If $$ L<1 $$, the series converges absolutely; if $$ L>1 $$, it diverges; and if $$ L=1 $$, the test is inconclusive.

### Self–Check 8

**Problem:**  
Determine the convergence of the series
$$
\sum_{n=1}^\infty \frac{n!}{3^n}
$$
using the ratio test.

**Solution:**

Let $$ a_n = \frac{n!}{3^n} $$. Then,
$$
\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{3^{n+1}} \cdot \frac{3^n}{n!} = \frac{n+1}{3}.
$$
Taking the limit,
$$
L = \lim_{n\to\infty} \frac{n+1}{3} = \infty > 1.
$$
Thus, the series diverges.

---

## 10.9 Determining Absolute or Conditional Convergence

A series converges absolutely if
$$
\sum_{n=1}^\infty |a_n|
$$
converges. If a series converges but not absolutely, it converges conditionally. Absolute convergence is a stronger condition and implies convergence.

### Self–Check 9

**Problem:**  
Determine whether the series
$$
\sum_{n=1}^\infty \frac{(-1)^n}{n}
$$
converges absolutely, conditionally, or diverges.

**Solution:**

Consider the absolute series:
$$
\sum_{n=1}^\infty \left|\frac{(-1)^n}{n}\right| = \sum_{n=1}^\infty \frac{1}{n},
$$
which is the harmonic series and diverges. However, by the Alternating Series Test, the original series converges. Hence, it converges conditionally.

---

## 10.10 Alternating Series Error Bound

For an alternating series satisfying the Alternating Series Test, the error when approximating the sum by the nth partial sum is at most the absolute value of the first omitted term:
$$
|R_n| \leq a_{n+1}.
$$

### Self–Check 10

**Problem:**  
Estimate the error when approximating the sum of
$$
\sum_{n=1}^\infty (-1)^{n+1}\frac{1}{n}
$$
by the sum of the first 4 terms.

**Solution:**

The first omitted term is $$ a_5 = \frac{1}{5} = 0.2. $$  
Thus, the error in using the first 4 terms is at most 0.2.

---

## 10.11 Finding Taylor Polynomial Approximations of Functions

A Taylor polynomial approximates a function by matching its derivatives at a point. The Taylor series for a function $$ f(x) $$ centered at $$ a $$ is given by:
$$
f(x)=\sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!}(x-a)^n.
$$
When $$ a=0 $$, it is called a Maclaurin series.

### Self–Check 11

**Problem:**  
Find the third-degree Taylor polynomial for
$$
f(x)=e^x
$$
centered at 0.

**Solution:**

For $$ e^x $$, all derivatives are $$ e^x $$, and at 0 they equal 1. Thus, the third-degree Taylor polynomial is:
$$
P_3(x)=1+x+\frac{x^2}{2}+\frac{x^3}{6}.
$$

---

## 10.12 Lagrange Error Bound

The Lagrange Error Bound estimates the error in a Taylor polynomial approximation. If $$ f $$ is approximated by its nth-degree Taylor polynomial about $$ a $$, the error satisfies:
$$
|R_n(x)|\leq \frac{M}{(n+1)!}|x-a|^{n+1},
$$
where $$ M $$ is an upper bound on $$ |f^{(n+1)}(z)| $$ for $$ z $$ between $$ a $$ and $$ x $$.

### Self–Check 12

**Problem:**  
Estimate the error in approximating $$ e^x $$ by its third-degree Taylor polynomial at $$ x=0.1 $$.

**Solution:**

For $$ f(x)=e^x $$, all derivatives are $$ e^x $$. On the interval $$ [0,0.1] $$, the maximum of $$ e^x $$ is $$ e^{0.1}\approx1.105. $$  
Using the error bound with $$ n=3 $$ and $$ a=0 $$:
$$
|R_3(0.1)|\leq \frac{1.105}{4!}|0.1|^4 = \frac{1.105}{24}(0.0001) \approx \frac{1.105 \times 0.0001}{24} \approx 0.0000046.
$$

---

## 10.13 Radius and Interval of Convergence of Power Series

A power series
$$
\sum_{n=0}^\infty a_n (x-a)^n
$$
converges for values of $$ x $$ within a radius $$ R $$ around the center $$ a $$, determined by the Ratio or Root Test. The interval of convergence is then $$ (a-R, a+R) $$ (with possible inclusion of endpoints).

### Self–Check 13

**Problem:**  
Find the radius of convergence for the power series
$$
\sum_{n=0}^\infty \frac{x^n}{n!}.
$$

**Solution:**

Using the Ratio Test, compute:
$$
\lim_{n\to\infty} \left|\frac{x^{n+1}/(n+1)!}{x^n/n!}\right| = \lim_{n\to\infty} \left|\frac{x}{n+1}\right| = 0.
$$
Since this limit is 0 for all $$ x $$, the radius of convergence is $$ \infty $$.

---

## 10.14 Finding Taylor or Maclaurin Series for a Function

To find the Taylor (or Maclaurin) series for a function, compute its derivatives at the center and substitute them into the Taylor series formula. This representation is extremely useful for approximations and for solving differential equations.

### Self–Check 14

**Problem:**  
Find the Maclaurin series for $$ \sin x $$ up to the term in $$ x^5 $$.

**Solution:**

The derivatives of $$ \sin x $$ at 0 yield:

- $$ f(0)=0, $$
- $$ f'(0)=\cos 0=1, $$
- $$ f''(0)=-\sin 0=0, $$
- $$ f'''(0)=-\cos 0=-1, $$
- $$ f^{(4)}(0)=\sin 0=0, $$
- $$ f^{(5)}(0)=\cos 0=1. $$

Thus, the Maclaurin series up to $$ x^5 $$ is:
$$
\sin x \approx x - \frac{x^3}{3!} + \frac{x^5}{5!} = x - \frac{x^3}{6} + \frac{x^5}{120}.
$$

---

## 10.15 Representing Functions as Power Series

Many functions can be represented as power series within their interval of convergence. This representation allows term–by–term differentiation and integration, making it a powerful tool in both theory and application.

### Self–Check 15

**Problem:**  
Express the function
$$
\frac{1}{1-x}
$$
as a power series and state its interval of convergence.

**Solution:**

The function can be written as the sum of a geometric series:
$$
\frac{1}{1-x}=\sum_{n=0}^\infty x^n,
$$
which converges for $$ |x|<1 $$.

---
