---
title: CalcBC Ch6 - Integration and Accumulation of Change
published: 2025-04-06
description: 'Notes on AP calcBC chapter 6'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: true
lang: 'en'
---

## Chapter 6: Integration and Accumulation of Change

Integration is a cornerstone of calculus—it allows us to accumulate small changes to compute areas, volumes, and other quantities. In this chapter, we explore several aspects of integration: how Riemann sums build the concept of area, how the Fundamental Theorem of Calculus links differentiation with integration, various methods to compute antiderivatives, and how integration can be applied in both standard and extended contexts.

---

## 6.1 Riemann Sums and Approximating Areas

Integration begins with the idea of approximating the area under a curve. **Riemann sums** partition an interval into subintervals and sum up the areas of rectangles that approximate the region under a function. As the number of subintervals increases (and their width decreases), the sum converges to the exact area. This process is the intuitive foundation for the definite integral.

Riemann sums are not only used to define the integral rigorously but also to provide numerical approximations when an antiderivative is difficult to find. In practice, left–, right–, and midpoint Riemann sums each offer different approximations that can be compared and refined.

### Self-Check 1

**Problem:**  
Approximate the area under the curve $$ f(x)=x^2 $$ on the interval $$ [0,1] $$ using a right Riemann sum with 4 subintervals.

**Solution:**

1. **Determine the width of each subinterval:**  
   $$ \Delta x = \frac{1-0}{4} = 0.25. $$

2. **Identify the right endpoints:**  
   $$ x_1=0.25,\; x_2=0.50,\; x_3=0.75,\; x_4=1.0. $$

3. **Compute the sum:**  
   $$ S = \sum_{i=1}^{4} f(x_i)\Delta x = \left[ (0.25)^2 + (0.50)^2 + (0.75)^2 + (1.0)^2 \right] \cdot 0.25. $$
   $$ S = \left[ 0.0625 + 0.25 + 0.5625 + 1 \right] \cdot 0.25 = (1.875) \cdot 0.25 = 0.46875. $$

Thus, the approximate area under $$ f(x)=x^2 $$ from $$ 0 $$ to $$ 1 $$ is $$ 0.46875 $$.

---

## 6.2 Definite Integrals and the Fundamental Theorem of Calculus

Once we understand Riemann sums, we define the **definite integral** as the limit of these sums. The definite integral $$ \int_a^b f(x)\,dx $$ represents the net area under the curve $$ f(x) $$ from $$ x=a $$ to $$ x=b $$.

The **Fundamental Theorem of Calculus (FTC)** bridges differentiation and integration. Its first part tells us that if $$ F $$ is an antiderivative of $$ f $$, then:
$$
\int_a^b f(x)\,dx = F(b) - F(a).
$$
The second part assures that the derivative of an accumulation function is the original function:
$$
\frac{d}{dx}\left[\int_a^x f(t)\,dt\right] = f(x).
$$

This theorem is standardly used to compute areas and solve problems involving accumulation, and it also underpins methods for evaluating net change in various applied contexts.

### Self-Check 2

**Problem:**  
Evaluate the definite integral  
$$ \int_0^2 x^2\,dx. $$

**Solution:**

1. **Find an antiderivative of $$ x^2 $$:**  
   An antiderivative is $$ F(x) = \frac{x^3}{3}. $$

2. **Apply the Fundamental Theorem:**  
   $$ \int_0^2 x^2\,dx = F(2) - F(0) = \frac{2^3}{3} - 0 = \frac{8}{3}. $$

Thus, the area under the curve from 0 to 2 is $$ \frac{8}{3} $$.

---

## 6.3 Antiderivatives and Indefinite Integrals

An **antiderivative** of a function $$ f(x) $$ is another function $$ F(x) $$ whose derivative is $$ f(x) $$; this process is often referred to as "indefinite integration." The general antiderivative is expressed with a constant of integration, $$ C $$, because differentiation of a constant yields zero.

Basic rules such as the power rule for integration mirror the differentiation rules. For instance, if $$ f(x) = x^n $$ (with $$ n \neq -1 $$), then:
$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C.
$$

Antiderivatives are used extensively not only to compute definite integrals (via the FTC) but also to solve differential equations and model systems where the accumulation of change is central.

### Self-Check 3

**Problem:**  
Find the general antiderivative of  
$$ f(x) = 3x^2 + 2x - 5. $$

**Solution:**

1. **Integrate each term separately:**
   - $$ \int 3x^2\,dx = 3\cdot\frac{x^3}{3} = x^3. $$
   - $$ \int 2x\,dx = 2\cdot\frac{x^2}{2} = x^2. $$
   - $$ \int (-5)\,dx = -5x. $$

2. **Combine and add the constant of integration:**  
   $$ \int (3x^2 + 2x - 5)\,dx = x^3 + x^2 - 5x + C. $$

Thus, the general antiderivative is $$ x^3 + x^2 - 5x + C $$.

---

## 6.4 Techniques of Integration

While many integrals can be computed using basic rules, more complex integrals require specialized techniques. Two of the most common methods are:

1. **Substitution:**  
   This technique is analogous to the Chain Rule in differentiation. By letting $$ u = g(x) $$, you simplify the integrand so that:
   $$ \int f(g(x))g'(x)\,dx = \int f(u)\,du. $$

2. **Integration by Parts:**  
   Derived from the product rule for differentiation, this method is useful when the integrand is a product of functions:
   $$ \int u\,dv = uv - \int v\,du. $$

These techniques are standardly used across many problems—from computing areas to solving differential equations—and can be “stretched” for more creative applications. For instance, integration by parts is not only used in pure math problems but also in physics to derive energy relationships.

### Self-Check 4

**Problem:**  
Evaluate the integral  
$$ \int x \cos(x^2)\,dx $$  
using substitution.

**Solution:**

1. **Let $$ u = x^2 $$ so that $$ du = 2x\,dx $$ or $$ x\,dx = \frac{du}{2} $$.**

2. **Substitute into the integral:**
   $$ \int x \cos(x^2)\,dx = \int \cos(u) \frac{du}{2} = \frac{1}{2} \int \cos(u)\,du. $$

3. **Integrate:**
   $$ \frac{1}{2}\sin(u) + C. $$

4. **Substitute back:**
   $$ = \frac{1}{2}\sin(x^2) + C. $$

Thus, the evaluated integral is $$ \frac{1}{2}\sin(x^2) + C $$.

---

## 6.5 Improper Integrals

Improper integrals extend the concept of integration to functions with infinite limits or unbounded integrands. These integrals are defined as limits; for example, an integral with an infinite upper bound is expressed as:
$$
\int_a^\infty f(x)\,dx = \lim_{b\to\infty} \int_a^b f(x)\,dx.
$$

Determining whether an improper integral converges (i.e., has a finite value) or diverges is crucial in many applications, including probability and physics. Techniques like the Comparison Test or the p–test are often used to analyze convergence.

### Self-Check 5

**Problem:**  
Determine the convergence of and evaluate (if convergent) the integral  
$$ \int_1^\infty \frac{1}{x^2}\,dx. $$

**Solution:**

1. **Set up the integral as a limit:**
   $$ \int_1^\infty \frac{1}{x^2}\,dx = \lim_{b\to\infty} \int_1^b \frac{1}{x^2}\,dx. $$

2. **Integrate $$ \frac{1}{x^2} $$:**
   $$ \int \frac{1}{x^2}\,dx = -\frac{1}{x} + C. $$

3. **Evaluate from $$ 1 $$ to $$ b $$:**
   $$ \left[-\frac{1}{x}\right]_1^b = \left(-\frac{1}{b} + 1\right). $$

4. **Take the limit as $$ b\to\infty $$:**
   $$ \lim_{b\to\infty}\left(1 - \frac{1}{b}\right) = 1. $$

Thus, the integral converges and its value is $$ 1 $$.

---

## 6.6 Applications of Integration

Integration is a versatile tool that goes beyond computing areas. It is used to accumulate change in diverse applications such as:

- **Motion:**  
  Integrating a velocity function gives the total distance traveled.
- **Economics:**  
  The accumulation of cost or profit over time can be modeled with integrals.
- **Biology and Chemistry:**  
  Integration helps in determining total population change or the accumulation of a substance over time.

By understanding the standard uses of integration, you can also “stretch” these methods to novel problems—for example, by combining integration with other mathematical tools to solve complex real–world systems.

### Self-Check 6

**Problem:**  
A car travels with a velocity given by $$ v(t)= 3t^2 - 4t + 2 $$ (in meters per second). Find the total displacement from $$ t=0 $$ to $$ t=3 $$ seconds.

**Solution:**

1. **Set up the displacement integral:**
   $$ \text{Displacement} = \int_0^3 v(t)\,dt = \int_0^3 (3t^2 - 4t + 2)\,dt. $$

2. **Find the antiderivative:**
   - For $$ 3t^2 $$, the antiderivative is $$ t^3 $$.
   - For $$ -4t $$, it is $$ -2t^2 $$.
   - For $$ 2 $$, it is $$ 2t $$.

   Therefore, the antiderivative is:
   $$ F(t)= t^3 - 2t^2 + 2t. $$

3. **Evaluate from $$ t=0 $$ to $$ t=3 $$:**
   $$ F(3)-F(0)= \left(3^3 - 2(3)^2 + 2(3)\right) - 0 = \left(27 - 18 + 6\right)= 15. $$

Thus, the total displacement is $$ 15 $$ meters.

---
