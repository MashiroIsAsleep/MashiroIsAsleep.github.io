---
title: CalcBC Ch5 - Analytical Applications of Differentiation
published: 2025-04-05
description: 'Notes on AP calcBC chapter 5'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: true
lang: 'en'
---

## Chapter 5: Differentiation — Analytical Applications

In this chapter, we apply differentiation techniques to analyze and understand the behavior of functions. We explore key theorems that guarantee the existence of certain points, methods to locate and classify extrema, and tests to determine monotonicity and concavity. By combining these concepts, we can sketch graphs and solve optimization problems, even when functions are defined implicitly. The following seven topics will provide a detailed insight into these analytical applications.

---

## 5.1 The Mean Value Theorem and Rolle's Theorem

The Mean Value Theorem (MVT) is one of the cornerstone results in calculus. It formalizes the intuitive idea that for a smooth, continuous function, there must be at least one point where the instantaneous rate of change (the derivative) equals the average rate of change over an interval. Specifically, if $$ f $$ is continuous on $$ [a, b] $$ and differentiable on $$ (a, b) $$, then there exists some $$ c $$ in $$ (a, b) $$ such that

$$
f'(c) = \frac{f(b)-f(a)}{b-a}.
$$

Rolle's Theorem is a special case of the MVT where the function takes the same value at the endpoints (i.e., $$ f(a) = f(b) $$). It guarantees the existence of a point $$ c $$ where $$ f'(c) = 0 $$. These results not only provide theoretical underpinnings for more advanced topics but also serve as practical tools for solving problems.

### Self-Check 1

**Problem:**  
Show that for the function $$ f(x) = x^2 $$ on the interval $$ [1,3] $$, there exists a point $$ c $$ where the instantaneous rate of change equals the average rate of change.

**Solution:**

1. **Compute the average rate of change:**

   $$
   \frac{f(3)-f(1)}{3-1} = \frac{9-1}{2} = \frac{8}{2} = 4.
   $$

2. **Differentiate $$ f(x) $$:**

   $$
   f'(x) = 2x.
   $$

3. **Find $$ c $$ such that $$ f'(c)=4 $$:**

   $$
   2c = 4 \quad \Longrightarrow \quad c = 2.
   $$

Thus, at $$ c=2 $$, the instantaneous rate of change is 4, which matches the average rate of change.

---

## 5.2 Extrema and Critical Points

The Extreme Value Theorem tells us that any continuous function on a closed interval attains both a maximum and a minimum value. Critical points, where $$ f'(x) = 0 $$ or does not exist, are potential candidates for local extrema. Understanding where these occur is essential in identifying the highest or lowest points on a graph.

This concept is grounded in the idea that a function must “turn around” at a local extreme, causing the derivative to vanish (or become undefined). The systematic identification of critical points forms the basis for further analysis using derivative tests.

### Self-Check 2

**Problem:**  
Find the critical points and determine the local extrema for the function $$ f(x) = x^3 - 3x^2 + 2 $$.

**Solution:**

1. **Find the first derivative:**

   $$
   f'(x) = 3x^2 - 6x.
   $$

2. **Set the derivative to zero:**

   $$
   3x^2 - 6x = 0 \quad \Longrightarrow \quad 3x(x-2) = 0.
   $$
   Therefore, $$ x=0 $$ or $$ x=2 $$.

3. **Determine the nature of each critical point (using either the First or Second Derivative Test):**

   - For $$ x=0 $$, test values show a change from negative to positive, indicating a local minimum.
   - For $$ x=2 $$, test values show a change from positive to negative, indicating a local maximum.

Thus, the function has a local minimum at $$ x=0 $$ and a local maximum at $$ x=2 $$.

---

## 5.3 Increasing/Decreasing Functions and the First Derivative Test

The first derivative of a function gives us vital information about its monotonicity—whether the function is increasing or decreasing. If $$ f'(x) > 0 $$ on an interval, then $$ f $$ is increasing there; if $$ f'(x) < 0 $$, it is decreasing. The First Derivative Test refines this idea by analyzing the sign changes of $$ f'(x) $$ around critical points to classify them as local maxima or minima.

This test is fundamental because it provides an intuitive method to understand function behavior without needing to graph the function entirely.

### Self-Check 3

**Problem:**  
Determine the intervals on which $$ f(x) = x^4 - 4x^3 $$ is increasing or decreasing using the First Derivative Test.

**Solution:**

1. **Differentiate $$ f(x) $$:**

   $$
   f'(x) = 4x^3 - 12x^2 = 4x^2(x-3).
   $$

2. **Find critical points by setting $$ f'(x) = 0 $$:**

   $$
   4x^2(x-3) = 0 \quad \Longrightarrow \quad x = 0 \text{ or } x = 3.
   $$

3. **Test intervals around the critical points:**

   - For $$ x < 0 $$, choose $$ x = -1 $$: $$ f'(-1) = 4(1)(-4) = -16 \ (<0) $$.
   - For $$ 0 < x < 3 $$, choose $$ x = 1 $$: $$ f'(1) = 4(1)(-2) = -8 \ (<0) $$.
   - For $$ x > 3 $$, choose $$ x = 4 $$: $$ f'(4) = 4(16)(1) = 64 \ (>0) $$.

Thus, $$ f $$ is decreasing on $$ (-\infty, 3) $$ and increasing on $$ (3, \infty) $$, indicating a local minimum at $$ x=3 $$.

---

## 5.4 Concavity and the Second Derivative Test

The second derivative provides information about the concavity of a function—whether it curves upward or downward. A function is concave up if its second derivative is positive and concave down if it is negative. Additionally, the Second Derivative Test can help classify critical points: if $$ f'(c)=0 $$ and $$ f''(c)>0 $$, then $$ f $$ has a local minimum at $$ c $$; if $$ f''(c)<0 $$, a local maximum occurs.

This concept is deeply linked to the geometric behavior of curves, helping to predict and explain the nature of turning points and inflection points.

### Self-Check 4

**Problem:**  
For the function $$ f(x) = x^3 - 3x^2 + 2 $$, use the Second Derivative Test to determine the nature of the critical points found earlier.

**Solution:**

1. **Find the second derivative:**

   $$
   f''(x) = 6x - 6.
   $$

2. **Evaluate at the critical points:**

   - At $$ x = 0 $$:  
     $$
     f''(0) = 6(0) - 6 = -6 \ (<0) \quad \text{indicating a local maximum.}
     $$
   - At $$ x = 2 $$:  
     $$
     f''(2) = 6(2) - 6 = 6 \ (>0) \quad \text{indicating a local minimum.}
     $$

Thus, by the Second Derivative Test, $$ f $$ has a local maximum at $$ x=0 $$ and a local minimum at $$ x=2 $$.

---

## 5.5 Graph Sketching

Graph sketching is the synthesis of all analytical methods. By combining information about critical points, increasing/decreasing behavior, concavity, and inflection points, we can produce an accurate sketch of a function’s graph. This process involves plotting the critical values, identifying where the function rises or falls, and noting changes in curvature. Graph sketching is crucial for visualizing the behavior of functions and verifying analytical results.

### Self-Check 5

**Problem:**  
Sketch the graph of $$ f(x) = x^3 - 3x^2 + 2 $$ using its critical points, intervals of increase/decrease, and concavity information.

**Solution:**

1. **Critical points:**  
   From previous problems, we have critical points at $$ x=0 $$ and $$ x=2 $$.
2. **Monotonicity:**  
   The function is decreasing on $$ (-\infty, 3) $$ and increasing on $$ (3, \infty) $$ (based on the sign analysis of $$ f'(x) $$).
3. **Concavity:**  
   - Compute $$ f''(x) = 6x - 6. $$  
   - Inflection point occurs when $$ 6x - 6 = 0 \Longrightarrow x = 1. $$
   - For $$ x<1 $$, $$ f''(x)<0 $$ (concave down); for $$ x>1 $$, $$ f''(x)>0 $$ (concave up).

4. **Plot the key points and shape:**  
   - At $$ x=0 $$: $$ f(0)=2. $$
   - At $$ x=2 $$: $$ f(2)=2^3-3(2)^2+2 = 8-12+2=-2. $$
   - At $$ x=1 $$ (inflection point): Compute $$ f(1)=1-3+2=0. $$

By combining these details, one can sketch a curve that starts above, dips to a local maximum at $$ x=0 $$, passes through the inflection point at $$ (1,0) $$, reaches a local minimum at $$ (2,-2) $$, and then increases thereafter.

---

## 5.6 Optimization Problems

Optimization involves finding the best (maximum or minimum) value of a function under given conditions. This method is widely applied in economics, engineering, and the sciences. The process typically involves setting up a function that represents the quantity to be optimized, finding its derivative, and solving for critical points. Boundary conditions or constraints are then applied to determine the absolute optimum.

### Self-Check 6

**Problem:**  
A rectangle is to be inscribed under the curve $$ y = 16 - x^2 $$ with its base on the $$ x $$–axis. Find the dimensions of the rectangle with the maximum area.

**Solution:**

1. **Define variables:**  
   Let the half–width of the rectangle be $$ x $$ (so the full width is $$ 2x $$) and the height be $$ y = 16 - x^2 $$.
2. **Express the area as a function of $$ x $$:**

   $$
   A(x) = \text{width} \times \text{height} = 2x(16 - x^2) = 32x - 2x^3.
   $$

3. **Differentiate $$ A(x) $$ with respect to $$ x $$:**

   $$
   A'(x) = 32 - 6x^2.
   $$

4. **Find critical points by setting $$ A'(x)=0 $$:**

   $$
   32 - 6x^2 = 0 \quad \Longrightarrow \quad x^2 = \frac{32}{6} = \frac{16}{3} \quad \Longrightarrow \quad x = \frac{4}{\sqrt{3}}.
   $$

5. **Determine the height:**

   $$
   y = 16 - \left(\frac{4}{\sqrt{3}}\right)^2 = 16 - \frac{16}{3} = \frac{32}{3}.
   $$

Thus, the rectangle with maximum area has a width of $$ 2\left(\frac{4}{\sqrt{3}}\right) = \frac{8}{\sqrt{3}} $$ and a height of $$ \frac{32}{3} $$.

---

## 5.7 Exploring Behaviors of Implicit Relations

Not all functions are given in explicit form; many important relationships are defined implicitly. In such cases, implicit differentiation becomes a crucial tool not only for finding $$ \frac{dy}{dx} $$ but also for exploring the behavior of the function. Studying implicit relations allows us to examine curves like ellipses, hyperbolas, and more complicated loci where traditional methods may not apply directly.

By differentiating both sides of an implicit equation with respect to $$ x $$ and solving for $$ \frac{dy}{dx} $$, we can identify key features such as slopes, tangent lines, and critical points. This exploration deepens our understanding of the structure and symmetry of these curves.

### Self-Check 7

**Problem:**  
Consider the ellipse defined by $$ x^2 + 2y^2 = 18 $$. Use implicit differentiation to find the slope of the tangent line at the point $$ (3,2) $$.

**Solution:**

1. **Differentiate both sides with respect to $$ x $$:**

   $$
   2x + 4y\frac{dy}{dx} = 0.
   $$

2. **Solve for $$ \frac{dy}{dx} $$:**

   $$
   4y\frac{dy}{dx} = -2x \quad \Longrightarrow \quad \frac{dy}{dx} = -\frac{2x}{4y} = -\frac{x}{2y}.
   $$

3. **Substitute $$ x=3 $$ and $$ y=2 $$:**

   $$
   \frac{dy}{dx}\Big|_{(3,2)} = -\frac{3}{2(2)} = -\frac{3}{4}.
   $$

Thus, the slope of the tangent line to the ellipse at $$ (3,2) $$ is $$ -\frac{3}{4} $$.

---
