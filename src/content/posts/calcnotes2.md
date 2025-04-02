---
title: CalcBC Ch2 - Differentiation Part 1
published: 2025-04-02
description: 'Notes on AP calcBC chapter 2'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: true
lang: 'en' 
---


## Chapter 2: Differentiation — Definition and Basic Derivative Rules

## 2.1 Average Rate of Change vs. Instantaneous Rate of Change

### Average Rate of Change

The *average rate of change* of $$f(x)$$ between two points $$x=a$$ and $$x=b$$ is:

$$
\frac{f(b) - f(a)}{b - a}.
$$

- This is essentially the slope of the secant line connecting $$\bigl(a, f(a)\bigr)$$ and $$\bigl(b, f(b)\bigr)$$.
- It tells us how fast the function’s output changes, on average, as the input goes from $$a$$ to $$b$$.

### Instantaneous Rate of Change

The *instantaneous rate of change* at $$x=a$$ is the derivative $$f'(a)$$. Geometrically, it’s the slope of the tangent line at $$x=a$$. Analytically, it is defined using a limit:

$$
f'(a) \;=\; \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}.
$$

This limit expresses how $$f(x)$$ changes over an infinitesimally small interval around $$x=a$$.

---

## 2.2 Defining the Derivative of a Function & Derivative Notation

### Limit Definition of the Derivative

$$
f'(x) \;=\; \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}.
$$

- If this limit exists for each $$x$$ in an interval, then $$f'(x)$$ is a *function* that gives the slope at every point.
- If the limit does not exist at some $$x$$, then $$f$$ is not differentiable at that point.

### Notation

- **Leibniz Notation**: $$\frac{dy}{dx}$$ or $$\frac{d}{dx}[f(x)]$$.
- **Lagrange Notation**: $$f'(x)$$.
- **Newton’s Notation**: $$\dot{y}$$ (often used in physics for time derivatives).

You might see all of these. They convey the same concept: the *instantaneous rate of change* of $$y$$ with respect to $$x$$.

---

## 2.3 Estimating Derivatives of a Function at a Point

Sometimes you only have a graph or a table rather than an explicit formula. To approximate $$f'(a)$$:

- **From a Table**: Use the difference quotient $$\frac{f(x_2)-f(x_1)}{x_2-x_1}$$ for two points $$x_1$$ and $$x_2$$ around $$a$$ to get a “best guess.” Closer $$x_1, x_2$$ are to $$a$$, the better.
- **From a Graph**: Draw a tangent line at $$x=a$$ and estimate its slope by “rise over run.”

---

## 2.4 Connecting Differentiability and Continuity

- If $$f$$ is *differentiable* at $$x=a$$, then $$f$$ is automatically *continuous* at $$x=a$$.
- However, a function can be continuous but **not** differentiable if it has a “sharp corner,” “vertical tangent,” or a cusp. For instance, $$|x|$$ is continuous everywhere but not differentiable at $$x=0$$.

---

## 2.5 The Power Rule

A direct result of applying the limit definition to power functions is the **Power Rule**:

$$
\frac{d}{dx}[x^n] = n\,x^{n-1}.
$$

Examples:

- $$\frac{d}{dx}[x^3] = 3x^2$$.
- $$\frac{d}{dx}[x] = 1$$.
- $$\frac{d}{dx}[\sqrt{x}] = \frac{d}{dx}[x^{1/2}] = \tfrac12 x^{-1/2} = \frac{1}{2\sqrt{x}}.$$

---

## 2.6 Derivative Rules: Constant, Sum, Difference, and Constant Multiple

1. **Constant Function Rule**  
   $$\frac{d}{dx}[c] = 0,$$ where $$c$$ is any constant.

2. **Sum / Difference Rules**  
   $$
   \frac{d}{dx}[f(x)\pm g(x)] \;=\; f'(x)\;\pm\;g'(x).
   $$

3. **Constant Multiple Rule**  
   $$
   \frac{d}{dx}[c\,f(x)] \;=\; c\,f'(x).
   $$

All these rules ensure derivatives behave in a linear way with respect to addition and scalar multiplication.

---

## 2.7 Derivatives of $$\sin x$$, $$\cos x$$, $$e^x$$, and $$\ln x$$

1. **$$\sin x$$ and $$\cos x$$**  
   - $$\frac{d}{dx}[\sin x] = \cos x$$.  
   - $$\frac{d}{dx}[\cos x] = -\,\sin x$$.

2. **$$e^x$$**  
   $$\frac{d}{dx}[e^x] = e^x.$$

3. **$$\ln x$$**  
   $$\frac{d}{dx}[\ln x] = \frac{1}{x},\quad x>0.$$

These are standard derivatives you should memorize. They can be derived rigorously using the limit definition, but in practice they’re typically treated as fundamental facts.

---

## 2.8 The Product Rule

When you have $$f(x) = u(x)\,v(x)$$, its derivative is given by:

$$
f'(x) = u'(x)\,v(x) \;+\; u(x)\,v'(x).
$$

**Example**: If $$f(x)= (x^3)\,(\sin x)$$, then

$$
f'(x)= (3x^2)(\sin x) \;+\; (x^3)(\cos x).
$$

---

## 2.9 The Quotient Rule

For a function that’s the ratio of two differentiable functions $$\frac{u(x)}{v(x)}$$, the derivative is:

$$
\left(\frac{u}{v}\right)' = \frac{u'(x)\,v(x) - u(x)\,v'(x)}{(\,v(x)\,)^2}.
$$

**Example**: If $$g(x)= \frac{2x}{1+x^2}$$,

$$
g'(x)= \frac{(2)(1+x^2) - (2x)(2x)}{(1+x^2)^2}
= \frac{2(1+x^2) -4x^2}{(1+x^2)^2}.
$$

---

## 2.10 The Derivatives of $$\tan x$$, $$\cot x$$, $$\sec x$$, and $$\csc x$$

Using the quotient rule (or known identities), we get:

- $$\frac{d}{dx}[\tan x] = \sec^2 x.$$
- $$\frac{d}{dx}[\cot x] = -\,\csc^2 x.$$
- $$\frac{d}{dx}[\sec x] = \sec x\,\tan x.$$
- $$\frac{d}{dx}[\csc x] = -\,\csc x\,\cot x.$$

These can also be memorized or derived systematically using $$\tan x= \frac{\sin x}{\cos x}$$, etc.

---

## Self-Check Practice

Below are several sample problems to reinforce your understanding. Try each before looking at the solution.

---

### Self-Check 1

**Problem**: Using the **limit definition** of the derivative, show that:

$$
\frac{d}{dx}[x^2]\;=\;2x.
$$

### **Solution 1**

1. By definition:

   $$
   \frac{d}{dx}[x^2] \;=\; \lim_{h\to 0}\frac{(x+h)^2 -x^2}{h}.
   $$
2. Expand the numerator: $$(x+h)^2 = x^2 +2xh +h^2.$$

   So,

   $$
   \frac{(x+h)^2 -x^2}{h} = \frac{x^2 +2xh +h^2 -x^2}{h} = \frac{2xh + h^2}{h}.
   $$
3. Factor out $$h$$:

   $$
   \frac{2xh +h^2}{h} = 2x +h.
   $$
4. Now take the limit as $$h\to 0$$. Clearly, $$2x +h \to 2x$$.  
5. Hence, $$\frac{d}{dx}[x^2] = \boxed{2x}$$.

---

### Self-Check 2

**Problem**: Differentiate $$ f(x)= 7x^4 -3x +10 $$ using **Power, Sum, and Constant Rules**.

### **Solution 2**

- Term by term:
  1. $$\frac{d}{dx}[7x^4] = 7\cdot 4x^{3}=28x^3.$$  
  2. $$\frac{d}{dx}[-3x] = -3.$$  
  3. $$\frac{d}{dx}[10] = 0.$$

Putting it all together:

$$
f'(x)= 28x^3 -3.
$$

---

### Self-Check 3

**Problem**: Differentiate $$ g(x)= x^5 \ln x $$ using the **Product Rule**. Assume $$x>0$$.

### **Solution 3**

1. Let $$u(x)= x^5$$ and $$v(x)= \ln x$$.
2. Then $$u'(x)= 5x^4$$ and $$v'(x)= \frac{1}{x}$$.
3. Product Rule:

   $$
   g'(x)= u'(x)\,v(x) + u(x)\,v'(x)
         = (5x^4)(\ln x) + (x^5)\left(\frac{1}{x}\right).
   $$
4. Simplify the second term:

   $$
   (x^5)\left(\frac{1}{x}\right) = x^4.
   $$
5. Therefore,

   $$
   g'(x)= 5x^4 \ln x + x^4 = x^4(5\ln x + 1).
   $$

---

### Self-Check 4

**Problem**: Differentiate $$ h(x)= \frac{\sin x}{x^2} $$ using the **Quotient Rule**.

### **Solution 4**

1. Let $$u(x)= \sin x$$ and $$v(x)= x^2$$.  
2. Then $$u'(x)= \cos x$$ and $$v'(x)= 2x$$.  
3. Quotient Rule:

   $$
   h'(x)= \frac{u'(x)\,v(x) - u(x)\,v'(x)}{(v(x))^2}
         = \frac{(\cos x)(x^2) -(\sin x)(2x)}{(x^2)^2}.
   $$
4. Simplify numerator and denominator:

   $$
   = \frac{x^2 \cos x -2x \sin x}{x^4}
   = \frac{x^2\cos x}{x^4} - \frac{2x\sin x}{x^4}
   = \frac{\cos x}{x^2} - \frac{2\sin x}{x^3}.
   $$
5. Final derivative:

   $$
   h'(x)= \boxed{\frac{\cos x}{x^2} - \frac{2\sin x}{x^3}}.
   $$

---

### Self-Check 5

**Problem**: Find the derivatives of each of the following trigonometric functions:

1. $$p(x)= \tan x$$  
2. $$q(x)= \sec x$$

### **Solution 5**

1. **$$p(x)= \tan x$$**

   - Recall $$\tan x= \frac{\sin x}{\cos x}$$. Using the quotient rule:

     $$
     p'(x)= \frac{(\cos x)(\cos x) -(\sin x)(-\sin x)}{\cos^2 x}
           = \frac{\cos^2 x + \sin^2 x}{\cos^2 x}
           = \frac{1}{\cos^2 x} = \sec^2 x.
     $$

   So, $$\frac{d}{dx}[\tan x]= \sec^2 x.$$

2. **$$q(x)= \sec x$$**

   - $$\sec x= \frac{1}{\cos x}$$. Using the quotient rule or known identities:

     $$
     q'(x)= \sec x \tan x.
     $$
   Alternatively, you can do $$\frac{d}{dx}[\sec x]= \sec x \tan x$$ directly, if you’ve memorized it.

Hence, the results:

$$
\frac{d}{dx}[\tan x]= \sec^2 x \quad\text{and}\quad \frac{d}{dx}[\sec x]= \sec x \tan x.
$$
