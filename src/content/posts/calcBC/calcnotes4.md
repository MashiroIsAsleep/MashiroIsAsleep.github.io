---
title: CalcBC Ch4 - Contextual Applications of Differentiation
published: 2025-04-04
description: 'Notes on AP calcBC chapter 4'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: true
lang: 'en'
---

## Chapter 4: Differentiation — Contextual Applications

As we progress in calculus, it is essential to understand not only how to compute derivatives but also how to apply them in various contexts. This chapter bridges the gap between abstract differentiation and its practical applications in real–world problems. We will examine how derivatives represent rates of change in different settings, how they describe motion, and how they can be used to solve related rates and approximation problems. Finally, we will explore L’Hôpital’s Rule—a powerful tool for handling indeterminate limits.

---

## 4.1 Interpreting the Meaning of the Derivative in Context

The derivative is far more than a tool for finding slopes; it represents the instantaneous rate of change of one quantity with respect to another. In various real–world scenarios, this means interpreting derivatives as velocities in motion, marginal costs in economics, or even growth rates in biology. The concept originates from the desire to measure how a quantity changes at a precise moment rather than on average. This instantaneous change is captured by the limit definition, which “zooms in” on the function at a point.

For instance, when considering the temperature change over time or the rate at which a population grows, the derivative gives us crucial insight into the behavior of the system at any given moment. It links the abstract mathematical concept to tangible quantities, providing a quantitative measure of change that informs decision–making in science, engineering, and everyday life.

### Self-Check 1

**Problem:**  
A company’s revenue is modeled by the function  
$$ R(t) = 4t^2 + 20, $$  
where $$ t $$ is time in months. Interpret the derivative $$ R'(t) $$ and calculate the instantaneous rate of change of revenue at $$ t = 3 $$ months.

**Solution:**  

1. **Interpretation:**  
   The derivative $$ R'(t) $$ represents the marginal revenue, or the instantaneous change in revenue with respect to time. It tells us how quickly revenue is increasing (or decreasing) at a specific time.

2. **Calculation:**  
   - Differentiate $$ R(t) $$:  
     $$ R'(t) = \frac{d}{dt}(4t^2 + 20) = 8t. $$
   - Evaluate at $$ t = 3 $$:  
     $$ R'(3) = 8(3) = 24. $$

Thus, at $$ t = 3 $$ months, the revenue is increasing at a rate of 24 units per month.

---

## 4.2 Straight-Line Motion: Connecting Position, Velocity, and Acceleration

One of the most familiar applications of derivatives is in the study of motion. When an object moves along a straight line, its position is described by a function $$ s(t) $$, where $$ t $$ is time. The first derivative, $$ s'(t) $$, gives the velocity—the rate at which the position changes. The second derivative, $$ s''(t) $$, represents acceleration, which is the rate of change of velocity.

These relationships are derived directly from the limit definition of the derivative. They help us predict and analyze motion, from the simple falling of an object under gravity to the more complex trajectories in vehicle dynamics. Understanding these connections is crucial in physics and engineering, where accurate models of motion are necessary.

### Self-Check 2

**Problem:**  
An object’s position is given by  
$$ s(t) = t^3 - 6t^2 + 9t + 2. $$  
Find the velocity and acceleration at $$ t = 2 $$ seconds.

**Solution:**  

1. **Velocity (First Derivative):**  
   $$ s'(t) = 3t^2 - 12t + 9. $$
   Evaluate at $$ t = 2 $$:  
   $$ s'(2) = 3(2)^2 - 12(2) + 9 = 12 - 24 + 9 = -3. $$

2. **Acceleration (Second Derivative):**  
   Differentiate $$ s'(t) $$:  
   $$ s''(t) = 6t - 12. $$
   Evaluate at $$ t = 2 $$:  
   $$ s''(2) = 6(2) - 12 = 12 - 12 = 0. $$

Thus, at $$ t = 2 $$ seconds, the object’s velocity is $$-3$$ units per second (indicating a reversal in direction) and its acceleration is $$0$$.

---

## 4.3 Rates of Change in Applied Contexts Other Than Motion

While motion is a classic example, derivatives are also used to measure rates of change in diverse fields such as economics, biology, and chemistry. For instance, in economics, the derivative of a cost function represents the marginal cost—the cost of producing one additional unit of a product. In biology, derivatives can describe the rate at which a population grows or declines.

These applications stem from the fundamental idea that the derivative measures how a quantity changes with respect to another. This universality makes the derivative a cornerstone of modeling real–world phenomena. By understanding its interpretation, we can apply calculus to optimize processes, predict trends, and solve practical problems.

### Self-Check 3

**Problem:**  
The concentration of a chemical in a reaction is given by  
$$ C(t) = 100e^{-0.3t}, $$  
where $$ t $$ is time in minutes. Find the rate at which the concentration is changing at $$ t = 4 $$ minutes.

**Solution:**  

1. **Differentiate $$ C(t) $$:**  
   Using the Chain Rule,  
   $$ C'(t) = 100 \cdot (-0.3)e^{-0.3t} = -30e^{-0.3t}. $$
2. **Evaluate at $$ t = 4 $$:**  
   $$ C'(4) = -30e^{-0.3(4)} = -30e^{-1.2}. $$
3. **Approximation:**  
   Using $$ e^{-1.2} \approx 0.301 $$,  
   $$ C'(4) \approx -30(0.301) \approx -9.03. $$

Thus, at $$ t = 4 $$ minutes, the concentration is decreasing at approximately 9.03 units per minute.

---

## 4.4 Introduction to Related Rates

Related rates problems involve two or more quantities that change over time and are connected by an equation. The technique of **Implicit Differentiation** is employed here: by differentiating the entire relationship with respect to time, we can relate the rates of change of each quantity.

The origin of these problems lies in situations where measuring one variable directly is difficult, but its rate of change can be inferred from another variable. For example, in geometry, when the dimensions of a shape change over time, related rates allow us to connect the changing areas, volumes, or other attributes.

### Self-Check 4

**Problem:**  
The radius $$ r $$ of a circular balloon is increasing at a rate of 2 cm/s. The volume $$ V $$ of the balloon is given by  
$$ V = \frac{4}{3}\pi r^3. $$  
Find the rate at which the volume is increasing when $$ r = 5 $$ cm.

**Solution:**  

1. **Differentiate $$ V $$ with respect to time $$ t $$:**  
   $$ \frac{dV}{dt} = \frac{d}{dt}\left(\frac{4}{3}\pi r^3\right) = 4\pi r^2 \frac{dr}{dt}. $$
2. **Substitute known values:**  
   With $$ r = 5 $$ cm and $$ \frac{dr}{dt} = 2 $$ cm/s,  
   $$ \frac{dV}{dt} = 4\pi (5)^2 (2) = 4\pi \cdot 25 \cdot 2 = 200\pi \text{ cm}^3/\text{s}. $$

Thus, when $$ r = 5 $$ cm, the volume is increasing at a rate of $$ 200\pi $$ cm³/s.

---

## 4.5 Solving Related Rates Problems

In more complex related rates problems, several variables and their derivatives interact. A common example involves geometric figures—such as a ladder sliding down a wall or a shadow lengthening as an object moves. The key is to first establish a relationship between the variables, differentiate with respect to time, and then substitute known values to solve for the unknown rate.

This method not only reinforces the use of implicit differentiation but also teaches you to analyze dynamic systems where multiple quantities are interdependent.

### Self-Check 5

**Problem:**  
A 10-foot ladder is leaning against a wall. If the bottom of the ladder slides away from the wall at 1 ft/s, how fast is the top of the ladder sliding down when the bottom is 6 ft from the wall?

**Solution:**  

1. **Establish the relationship:**  
   Let $$ x $$ be the distance from the wall to the bottom of the ladder and $$ y $$ be the height of the ladder on the wall. By the Pythagorean theorem:  
   $$ x^2 + y^2 = 10^2 = 100. $$
2. **Differentiate with respect to $$ t $$:**  
   $$ 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0. $$
3. **Solve for $$ \frac{dy}{dt} $$:**  
   $$ \frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}. $$
4. **Substitute the known values:**  
   When $$ x = 6 $$ ft,  
   $$ y = \sqrt{100 - 6^2} = \sqrt{64} = 8 \text{ ft}, $$
   and $$ \frac{dx}{dt} = 1 $$ ft/s. Thus,  
   $$ \frac{dy}{dt} = -\frac{6}{8}(1) = -\frac{3}{4} \text{ ft/s}. $$

Therefore, the top of the ladder is sliding down at $$ \frac{3}{4} $$ ft/s when the bottom is 6 ft from the wall.

---

## 4.6 Approximating Values of a Function Using Local Linearity and Linearization

Local linearity is the idea that if you “zoom in” close enough to a point on a smooth curve, the function behaves almost like a straight line. **Linearization** uses the tangent line at a point $$ a $$ to approximate the function’s value for $$ x $$ near $$ a $$. This method is particularly useful when calculating exact values is difficult.

The linearization $$ L(x) $$ of a function $$ f(x) $$ at $$ x = a $$ is given by:
$$
L(x) = f(a) + f'(a)(x - a).
$$
This formula comes directly from the tangent line equation and provides a first–order approximation of the function.

### Self-Check 6

**Problem:**  
Use linearization to approximate $$ \sqrt{4.1} $$.

**Solution:**  

1. **Identify the function and point:**  
   Let $$ f(x) = \sqrt{x} $$ and choose $$ a = 4 $$ because $$ \sqrt{4} $$ is easy to compute.
2. **Find $$ f(a) $$ and $$ f'(a) $$:**  
   - $$ f(4) = 2 $$.  
   - $$ f'(x) = \frac{1}{2\sqrt{x}} $$ so $$ f'(4) = \frac{1}{2(2)} = \frac{1}{4} $$.
3. **Write the linearization:**  
   $$ L(x) = 2 + \frac{1}{4}(x - 4). $$
4. **Approximate $$ \sqrt{4.1} $$:**  
   $$ L(4.1) = 2 + \frac{1}{4}(4.1 - 4) = 2 + \frac{0.1}{4} = 2 + 0.025 = 2.025. $$

Thus, $$ \sqrt{4.1} $$ is approximately 2.025.

---

## 4.7 Using L’Hôpital’s Rule for Determining Limits and Indeterminate Forms

L’Hôpital’s Rule is a valuable technique for evaluating limits that result in indeterminate forms like $$ \frac{0}{0} $$ or $$ \frac{\infty}{\infty} $$. The rule is based on the idea that if both the numerator and denominator approach zero (or infinity), their derivatives can be used to find the limit. This rule is rooted in the Mean Value Theorem and provides a systematic way to resolve otherwise challenging limits.

The formal statement is: if  
$$ \lim_{x \to c} f(x) = 0 \quad \text{and} \quad \lim_{x \to c} g(x) = 0, $$
or both approach infinity, then
$$
\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)},
$$
provided the latter limit exists.

### Self-Check 7

**Problem:**  
Evaluate the limit  
$$ \lim_{x \to 0} \frac{e^x - 1}{x}. $$

**Solution:**  

1. **Identify the indeterminate form:**  
   As $$ x \to 0 $$, both the numerator $$ e^x - 1 $$ and the denominator $$ x $$ approach 0.
2. **Differentiate numerator and denominator:**  
   - Numerator derivative: $$ \frac{d}{dx}(e^x - 1) = e^x $$.  
   - Denominator derivative: $$ \frac{d}{dx}(x) = 1 $$.
3. **Apply L’Hôpital’s Rule:**  
   $$ \lim_{x \to 0} \frac{e^x - 1}{x} = \lim_{x \to 0} \frac{e^x}{1} = e^0 = 1. $$

Thus, the limit evaluates to 1.

---
