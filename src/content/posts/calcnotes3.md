---
title: CalcBC Ch3 - Differentiation Part 2
published: 2025-04-03
description: 'Notes on AP calcBC chapter 3'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: false
lang: 'en'
---

## Chapter 3: Differentiation — Composite, Implicit, and Inverse Functions

In this chapter, we move beyond basic derivative rules to explore methods for differentiating functions that are more complex in structure. We examine composite functions where one function is applied inside another, equations defined implicitly rather than in the form $$y=f(x)$$, and the differentiation of inverse functions—including inverse trigonometric functions. Each method has its own origins and subtleties, and understanding when and how to apply them is crucial for tackling advanced problems in calculus.

---

## 3.1 The Chain Rule

The **Chain Rule** is one of the most powerful tools in differentiation. It arises when we need to differentiate a composite function, that is, a function of a function. The idea is rooted in the concept that if a variable $$y$$ depends on $$u$$, which in turn depends on $$x$$, then the rate at which $$y$$ changes with respect to $$x$$ is the product of the rate at which $$y$$ changes with respect to $$u$$ and the rate at which $$u$$ changes with respect to $$x$$.

This rule is formally stated as:
$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx},
$$
when $$y = f(u)$$ and $$u = g(x)$$. The derivation comes from considering the limit definition of the derivative and carefully analyzing the behavior of the inner function as the change in $$x$$ shrinks to zero. This layered perspective not only simplifies the differentiation of complex expressions but also deepens our understanding of how changes propagate through multiple functional relationships.

### Example: Differentiating a Composite Function

Differentiate
$$
y = \sin(3x).
$$

1. **Identify the inner and outer functions:**  
   Let $$ u = 3x $$ (inner function) and $$ y = \sin(u) $$ (outer function).

2. **Differentiate each part:**  
   - $$ \frac{dy}{du} = \cos(u) $$.  
   - $$ \frac{du}{dx} = 3 $$.

3. **Apply the Chain Rule:**  
   $$
   \frac{dy}{dx} = \cos(3x) \cdot 3 = 3\cos(3x).
   $$

### Self-Check 1

**Problem:** Differentiate
$$
y = (2x+1)^5.
$$

**Solution:**

1. Identify the inner function: $$ u = 2x+1 $$ and the outer function: $$ y = u^5 $$.  
2. Differentiate each:
   - $$ \frac{du}{dx} = 2 $$.
   - $$ \frac{dy}{du} = 5u^4 $$.
3. Apply the Chain Rule:
   $$
   \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = 5(2x+1)^4 \cdot 2 = 10(2x+1)^4.
   $$

---

## 3.2 Implicit Differentiation

Not all functions are given in the explicit form $$ y = f(x) $$. Often, especially in more complex relationships like circles or ellipses, $$ x $$ and $$ y $$ are intertwined in an equation. **Implicit Differentiation** is the technique used to differentiate such equations without solving explicitly for $$ y $$.

The key idea is to differentiate both sides of the equation with respect to $$ x $$, treating $$ y $$ as a function of $$ x $$. Whenever you differentiate a term involving $$ y $$, you must multiply by $$ \frac{dy}{dx} $$ (applying the Chain Rule). This process allows you to solve for $$ \frac{dy}{dx} $$ even when $$ y $$ is not isolated.

### Example: Differentiating an Implicit Equation

Differentiate
$$
x^2 + y^2 = 25.
$$

1. Differentiate both sides with respect to $$ x $$:
   $$
   2x + 2y \frac{dy}{dx} = 0.
   $$
2. Solve for $$ \frac{dy}{dx} $$:
   $$
   2y \frac{dy}{dx} = -2x \quad \Longrightarrow \quad \frac{dy}{dx} = -\frac{x}{y}.
   $$

### Self-Check 2

**Problem:** Differentiate
$$
xy + y^2 = 10.
$$

**Solution:**

1. Differentiate both sides with respect to $$ x $$:
   - For $$ xy $$, use the product rule: $$ \frac{d}{dx}(xy) = y + x\frac{dy}{dx} $$.
   - For $$ y^2 $$: $$ \frac{d}{dx}(y^2) = 2y\frac{dy}{dx} $$.

   Thus,
   $$
   y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0.
   $$
2. Combine like terms:
   $$
   y + (x+2y)\frac{dy}{dx} = 0.
   $$
3. Solve for $$ \frac{dy}{dx} $$:
   $$
   (x+2y)\frac{dy}{dx} = -y \quad \Longrightarrow \quad \frac{dy}{dx} = -\frac{y}{x+2y}.
   $$

---

## 3.3 Differentiating Inverse Functions

Differentiating inverse functions can seem counterintuitive at first, but the process is grounded in a simple relationship between a function and its inverse. If $$ y = f(x) $$ is a one-to-one function with an inverse $$ x = f^{-1}(y) $$, then by the property of inverse functions, we have:
$$
f(f^{-1}(x)) = x.
$$
Differentiating both sides with respect to $$ x $$ using the Chain Rule yields
$$
f'\bigl(f^{-1}(x)\bigr) \cdot \frac{d}{dx}\left[f^{-1}(x)\right] = 1.
$$
Solving for $$ \frac{d}{dx}\left[f^{-1}(x)\right] $$ gives the formula:
$$
\frac{d}{dx}\left[f^{-1}(x)\right] = \frac{1}{f'\bigl(f^{-1}(x)\bigr)}.
$$
This result is especially useful when the derivative of the original function is easier to calculate than directly differentiating the inverse.

### Example: Differentiating the Inverse of $$ e^x $$

Since $$ f(x) = e^x $$ has the inverse $$ f^{-1}(x) = \ln x $$ and $$ f'(x) = e^x $$, we get:
$$
\frac{d}{dx}[\ln x] = \frac{1}{e^{\ln x}} = \frac{1}{x}.
$$

### Self-Check 3

**Problem:** Let $$ f(x) = x^3 + 1 $$. Find the derivative of the inverse function $$ f^{-1}(x) $$ at $$ x = 9 $$.

**Solution:**

1. First, find the value of $$ c $$ such that $$ f(c) = 9 $$:
   $$
   c^3 + 1 = 9 \quad \Longrightarrow \quad c^3 = 8 \quad \Longrightarrow \quad c = 2.
   $$
2. Compute $$ f'(x) = 3x^2 $$. Then $$ f'(2) = 3(2)^2 = 12 $$.
3. Use the inverse function derivative formula:
   $$
   \left[f^{-1}\right]'(9) = \frac{1}{f'(2)} = \frac{1}{12}.
   $$

---

## 3.4 Differentiating Inverse Trigonometric Functions

Inverse trigonometric functions, such as $$ \arcsin x $$, $$ \arccos x $$, and $$ \arctan x $$, are the inverses of the familiar sine, cosine, and tangent functions. Their derivatives are derived using implicit differentiation along with the Pythagorean identity. For instance, to derive the derivative of $$ y = \arcsin x $$, we start with the equation
$$
\sin y = x.
$$
Differentiating both sides with respect to $$ x $$ (and remembering that $$ y $$ is a function of $$ x $$) gives:
$$
\cos y \cdot \frac{dy}{dx} = 1.
$$
Since $$ \cos y = \sqrt{1-\sin^2 y} = \sqrt{1-x^2} $$, we find:
$$
\frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}}.
$$
A similar process is used for the other inverse trigonometric functions.

### Example: Differentiating $$ y = \arcsin x $$

As derived above, the derivative is:
$$
\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}},\quad |x| < 1.
$$

### Self-Check 4

**Problem:** Differentiate
$$
y = \arctan x.
$$

**Solution:**

1. Start with the identity: $$ y = \arctan x $$ implies $$ \tan y = x $$.
2. Differentiate both sides with respect to $$ x $$:
   $$
   \sec^2 y \cdot \frac{dy}{dx} = 1.
   $$
3. Solve for $$ \frac{dy}{dx} $$:
   $$
   \frac{dy}{dx} = \frac{1}{\sec^2 y}.
   $$
4. Recall that $$ \sec^2 y = 1 + \tan^2 y $$ and since $$ \tan y = x $$, we have:
   $$
   \sec^2 y = 1+x^2.
   $$
5. Therefore,
   $$
   \frac{dy}{dx} = \frac{1}{1+x^2}.
   $$

---

## 3.5 Selecting Procedures for Calculating Derivatives

Not every function is a simple candidate for a single rule. Often, a function may be a product of two functions, a composite of functions, or even defined implicitly. The challenge is to analyze the structure of the function and decide which rule (or combination of rules) to apply. In practice, you may need to use the Chain Rule together with the Product or Quotient Rule, or even combine implicit differentiation when functions are not given explicitly.

For example, consider a function that involves both a composite and a product:
$$
y = x^2 \sin(x^3).
$$
Here, one must first recognize that $$ \sin(x^3) $$ is a composite function and that the overall function is the product of $$ x^2 $$ and $$ \sin(x^3) $$. By breaking the problem into parts and determining the inner structure, you ensure that every component is handled correctly. This analytical approach is critical as the functions grow in complexity.

### Example: Differentiating $$ y = x^2 \sin(x^3) $$

1. Recognize the product: $$ u(x) = x^2 $$ and $$ v(x) = \sin(x^3) $$.
2. Differentiate $$ u(x) $$: $$ u'(x) = 2x $$.
3. For $$ v(x) $$, notice it’s composite:
   - Let $$ w = x^3 $$; then $$ v(x) = \sin w $$ and $$ \frac{dv}{dw} = \cos w $$.
   - Also, $$ \frac{dw}{dx} = 3x^2 $$.
   - Thus, $$ v'(x) = \cos(x^3) \cdot 3x^2 $$.
4. Apply the Product Rule:
   $$
   y' = u'(x)v(x) + u(x)v'(x) = 2x \sin(x^3) + x^2\bigl[3x^2\cos(x^3)\bigr] = 2x \sin(x^3) + 3x^4\cos(x^3).
   $$

### Self-Check 5

**Problem:** Differentiate
$$
y = (3x+2)^4 \cos(2x).
$$

**Solution:**

1. Identify the two functions:
   - $$ u(x) = (3x+2)^4 $$ (which is composite) and $$ v(x) = \cos(2x) $$ (also composite).
2. Differentiate $$ u(x) $$:
   - Let $$ w = 3x+2 $$ so that $$ u(x) = w^4 $$ and $$ u'(x) = 4w^3 \cdot \frac{dw}{dx} = 4(3x+2)^3 \cdot 3 = 12(3x+2)^3 $$.
3. Differentiate $$ v(x) $$:
   - Let $$ z = 2x $$ so $$ v(x) = \cos z $$ and $$ v'(x) = -\sin z \cdot \frac{dz}{dx} = -\sin(2x) \cdot 2 = -2\sin(2x) $$.
4. Apply the Product Rule:
   $$
   y' = u'(x)v(x) + u(x)v'(x) = 12(3x+2)^3 \cos(2x) - (3x+2)^4 \cdot 2\sin(2x).
   $$

---

## 3.6 Calculating Higher Order Derivatives

Higher order derivatives provide insights into the curvature and acceleration of functions beyond their immediate rate of change. Once you have the first derivative, you can differentiate again to obtain the second derivative (and beyond). These subsequent derivatives are particularly important when studying the concavity of graphs, optimization problems, and differential equations.

When calculating higher order derivatives, it is essential to apply the differentiation rules (such as the Chain, Product, and Quotient Rules) consistently. Sometimes, the structure of the first derivative might simplify the process for the second derivative; other times, it requires careful algebraic manipulation to simplify the expression.

### Example: Finding the Second Derivative of $$ y = \ln(x^2+1) $$

1. **First derivative:**  
   Using the Chain Rule:
   $$
   y' = \frac{1}{x^2+1} \cdot 2x = \frac{2x}{x^2+1}.
   $$
2. **Second derivative:**  
   Differentiate $$ y' = \frac{2x}{x^2+1} $$ using the Quotient Rule:
   - Let $$ u(x) = 2x $$ and $$ v(x) = x^2+1 $$ so that $$ u'(x) = 2 $$ and $$ v'(x) = 2x $$.
   $$
   y'' = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2} = \frac{2(x^2+1) - 2x(2x)}{(x^2+1)^2} = \frac{2x^2+2 - 4x^2}{(x^2+1)^2} = \frac{2-2x^2}{(x^2+1)^2}.
   $$

### Self-Check 6

**Problem:** Find the second derivative of
$$
y = e^{2x}.
$$

**Solution:**

1. **First derivative:**  
   $$ y = e^{2x} $$ is a composite function with the inner function $$ u = 2x $$. Thus,
   $$
   y' = e^{2x} \cdot 2 = 2e^{2x}.
   $$
2. **Second derivative:**  
   Differentiate $$ y' = 2e^{2x} $$ again using the Chain Rule:
   $$
   y'' = 2 \cdot \frac{d}{dx}\left(e^{2x}\right) = 2 \cdot \left(e^{2x} \cdot 2\right) = 4e^{2x}.
   $$

---
