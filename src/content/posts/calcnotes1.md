---
title: Chapter 1 - Limits and Contnuity
published: 2025-03-28
description: 'Notes on AP calcBC chapter 1'
image: ''
tags: [Notes, AP, Math]
category: 'Notes-笔记'
draft: false
lang: 'en'
---

## Chapter 1: Limits and Continuity

## 1.1 Why Do We Need Limits?

### The Big Idea: Instantaneous Rate of Change

In everyday life, we talk about *average speed* (like “I drove 120 miles in 2 hours, so my average speed was 60 mph”). But what about your *speed at a single instant* (the number your car’s speedometer shows at exactly t = 30 seconds)?

In algebra, the slope of a line $$\Delta y / \Delta x$$ measures *average rate of change* between two points. In calculus, we want the slope of a curve (the *instantaneous rate of change*) at exactly one point.

To handle this, we let the two points on the curve get very close—so close that the difference between their $$x$$-coordinates ($$\Delta x$$) goes to zero. **Limits** formalize the idea of “approaching a value” without necessarily reaching it.

#### Key Vocabulary

- **Secant line**: A line connecting two points on a function’s graph; it gives an *average rate of change* over some interval.
- **Tangent line**: A line that “just touches” (or is “instantaneous” to) a function at a single point, giving the *instantaneous rate of change*.

---

## 1.2 Formalizing the Concept of a Limit

We write:

$$
\lim_{x \to a} f(x) = L
$$

to mean: “As $$x$$ gets closer and closer to $$a$$ (from both sides), the function $$f(x)$$ gets closer and closer to $$L$$.”

- It does **not** require $$f(a)$$ to exist or to equal $$L$$. The limit depends only on the *approach* to $$a$$.

### Left-Hand vs. Right-Hand Limits

- **Left-hand limit**: $$\lim_{x \to a^-} f(x)$$ means $$x$$ approaches $$a$$ from values *less than* $$a$$.  
- **Right-hand limit**: $$\lim_{x \to a^+} f(x)$$ means $$x$$ approaches $$a$$ from values *greater than* $$a$$.

For $$\lim_{x \to a} f(x)$$ to exist (and be equal to some $$L$$), the left-hand limit and right-hand limit must *agree*.

---

## 1.3 & 1.4 Estimating Limits Graphically and from Tables

### Estimating from a Graph

1. Look at the point $$x=a$$ on your graph.  
2. Trace from the left side and the right side to see if the function values head toward the same $$y$$-value.  
3. If they do, that $$y$$-value is the limit.  
4. If they approach two different $$y$$-values, the limit does not exist (DNE).

> **Note**: The function might have a *hole* or *no actual point* at $$x=a$$. The limit can still exist if the $$y$$-value approached from both sides is the same.

### Estimating from a Table

If you have a table of $$(x, f(x))$$ values near $$x = a$$, look at how $$f(x)$$ behaves as $$x$$ gets closer to $$a$$ from above and below. If the outputs get closer to one number, that number is your estimated limit.

---

## 1.5 Determining Limits Using Algebraic Methods

Often, you can find a limit by:

1. **Direct Substitution**  
   If substituting $$x=a$$ into $$f(x)$$ doesn’t cause a division by zero or other undefined behavior, then
   $$
   \lim_{x \to a} f(x) = f(a).
   $$

2. **Factor & Cancel (for 0/0 forms)**  
   If you get $$\frac{0}{0}$$ by substituting, try factoring the numerator and denominator, and cancel common factors causing the 0. Then re-check the limit.

3. **Rationalizing (for radicals)**  
   If you see square roots, you can multiply by a *conjugate* to remove the radical from denominator or numerator.

4. **Common Limit Laws**  
   - $$\lim_{x\to a} [f(x) + g(x)] = \lim_{x\to a} f(x) + \lim_{x\to a} g(x)$$  
   - $$\lim_{x\to a} [c \cdot f(x)] = c \cdot \lim_{x\to a} f(x)$$  
   - $$\lim_{x\to a} [f(x)\cdot g(x)] = (\lim_{x\to a} f(x)) \cdot (\lim_{x\to a} g(x))$$, provided both limits exist.  
   - $$\lim_{x\to a} \frac{f(x)}{g(x)} = \frac{\lim_{x\to a} f(x)}{\lim_{x\to a} g(x)}$$, provided $$\lim_{x\to a} g(x)\neq 0$$.

---

## 1.6 & 1.7 More Advanced Strategies: Squeeze Theorem & Selecting Procedures

### Squeeze (Sandwich) Theorem

If $$g(x)\leq f(x)\leq h(x)$$ for $$x$$ near $$a$$, and if

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L,
$$

then

$$
\lim_{x \to a} f(x) = L.
$$

**Example**: $$\lim_{x \to 0} x \sin\left(\frac{1}{x}\right)$$.

- We know $$-1 \le \sin\left(\frac{1}{x}\right) \le 1$$.  
- Multiply by $$x$$: $$-|x|\le x\,\sin\left(\tfrac{1}{x}\right)\le |x|$$.  
- $$\lim_{x \to 0} -|x| = 0$$ and $$\lim_{x \to 0} |x| = 0$$.  
- By the Squeeze Theorem, the limit is $$0$$.

---

## 1.8, 1.9, 1.10 Continuity and Discontinuities

### Continuity at a Point

A function $$f$$ is **continuous** at $$x=a$$ if:

1. $$f(a)$$ is defined.  
2. $$\lim_{x \to a} f(x)$$ exists.  
3. $$\lim_{x \to a} f(x) = f(a)$$.

In simpler terms, you can draw the function at $$x=a$$ *without lifting your pencil*.

### Types of Discontinuities

1. **Removable (Hole)**: The limit exists, but $$f(a)$$ is not defined or isn’t equal to that limit.  
2. **Jump**: Left- and right-hand limits exist but are not equal.  
3. **Infinite**: The function goes to $$+\infty$$ or $$-\infty$$ near $$a$$, usually indicating a vertical asymptote at $$x=a$$.

### Removing a Discontinuity

Sometimes you can redefine the function at $$a$$ to “fill in” a hole, making it continuous.

---

## 1.11 & 1.12 Infinite Limits and Limits at Infinity

### Infinite Limits (Vertical Asymptotes)

$$
\lim_{x\to a} f(x) = \infty
$$

means $$f(x)$$ becomes arbitrarily large (positive) as $$x$$ approaches $$a$$. Often, $$x=a$$ is a vertical asymptote. Similarly for $$-\infty$$.

### Limits at Infinity (Horizontal Asymptotes)

To understand how a function behaves as $$x$$ grows large (positively or negatively), look at:

$$
\lim_{x \to \infty} f(x) \quad \text{or} \quad \lim_{x \to -\infty} f(x).
$$

If a function approaches a finite value $$L$$ as $$x\to\infty$$, then $$y=L$$ is a **horizontal asymptote**.

**Common Trick**: For rational functions $$\frac{P(x)}{Q(x)}$$:

- If $$\deg(P)=\deg(Q)$$, limit at infinity is ratio of leading coefficients.  
- If $$\deg(P)<\deg(Q)$$, the limit is $$0$$.  
- If $$\deg(P)>\deg(Q)$$, the function grows without bound and no horizontal asymptote exists (there might be a slant asymptote instead).

---

## 1.13 & 1.14 Intermediate Value Theorem (IVT)

If $$f$$ is continuous on $$[a,b]$$ and $$N$$ is any number between $$f(a)$$ and $$f(b)$$, then there exists at least one $$c$$ in $$[a,b]$$ such that $$f(c) = N$$.

**Interpretation**: A continuous function on an interval can’t “jump over” any $$y$$-values. If $$f$$ transitions from negative to positive somewhere in $$[a,b]$$, it must cross zero.

**Use**:  

- Great for proving that a root exists.  
- Often used to show a continuous function hits every intermediate value between its endpoints.

---

## Self-Check Practice

Below are several sample problems to reinforce your understanding. **Attempt to solve them first**, then compare your approach to the detailed solutions.

---

### Self-Check 1

**Problem**: Evaluate the limit by **direct substitution** if possible, or determine if it does not exist:

$$
\lim_{x \to 3} (2x + 1).
$$

### **Solution 1**

1. $$2x+1$$ is a polynomial, continuous everywhere.  
2. Substitute $$x=3$$:
   $$
   2(3)+1 = 7.
   $$

So, $$\boxed{7}$$ is the limit.

---

### Self-Check 2

**Problem**: Evaluate:

$$
\lim_{x \to 1} \frac{x^2 - 1}{x - 1}.
$$

**Hint**: You get $$\frac{0}{0}$$ if you plug in $$x=1$$ directly, so consider factoring.

### **Solution 2**

1. Factor numerator: $$x^2 - 1 = (x-1)(x+1)$$.  
2. Rewrite the expression:
   $$
   \frac{(x-1)(x+1)}{x-1}.
   $$
   For $$x \neq 1$$, the $$(x-1)$$ cancels.  
3. So the limit depends on $$\lim_{x \to 1} (x+1)$$, which is $$2$$.  
4. $$\boxed{2}$$ is the limit.

---

### Self-Check 3

**Problem**: Use the **Squeeze Theorem** to find:

$$
\lim_{x \to 0} x \sin\Bigl(\frac{1}{x}\Bigr).
$$

### **Solution 3**

1. $$-1 \leq \sin\bigl(\tfrac{1}{x}\bigr)\leq 1$$.  
2. Multiply by $$x$$: $$-|x|\le x\,\sin\bigl(\tfrac{1}{x}\bigr)\le |x|$$.  
3. As $$x\to 0$$, both $$-|x|$$ and $$|x|$$ go to 0.  
4. By Squeeze Theorem, the limit is $$\boxed{0}$$.

---

### Self-Check 4

**Problem**: Classify the discontinuity at $$x=2$$ for

$$
f(x) =
\begin{cases}
  \frac{x^2 - 4}{x - 2} & x \neq 2,\\
  10 & x = 2.
\end{cases}
$$

Then find $$\lim_{x \to 2} f(x)$$.

### **Solution 4**

1. For $$x \neq 2$$:
   $$
   \frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x+2 \quad (x\neq 2).
   $$
2. As $$x\to 2$$, $$x+2 \to 4$$. So the limit from either side is 4.  
3. But $$f(2)=10$$. The limit (4) is not equal to the function’s defined value (10).  
4. This is a **removable discontinuity** (a “hole”) at $$x=2$$.  
5. $$\lim_{x \to 2} f(x)=\boxed{4}$$.

---

### Self-Check 5

**Problem**: Evaluate:

$$
\lim_{x \to \infty} \frac{3x^2 + 5x - 2}{6x^2 - 4}.
$$

### **Solution 5**

1. Factor out $$x^2$$ from numerator and denominator:

   $$
   \frac{3x^2 + 5x -2}{6x^2 -4}
   = \frac{x^2(3 + 5/x -2/x^2)}{x^2(6 - 4/x^2)}
   = \frac{3 + 5/x -2/x^2}{6 -4/x^2}.
   $$
2. As $$x\to\infty$$, $$5/x, 2/x^2,$$ and $$4/x^2$$ all go to 0.  
3. The expression approaches $$\frac{3}{6} = \frac12$$.  
4. $$\boxed{\tfrac12}$$ is the limit. A horizontal asymptote is $$y=\tfrac12$$.

---

### Self-Check 6

**Problem**: Show by the **Intermediate Value Theorem** that

$$
g(x) = x^3 + x - 1
$$

has at least one real root in $$[0,1]$$.

### **Solution 6**

1. $$g(0)= -1$$. $$g(1)= 1$$.  
2. $$g$$ is a polynomial, so it’s continuous on $$[0,1]$$.  
3. $$g(0)<0$$ and $$g(1)>0$$.  
4. By IVT, there is some $$c$$ in $$[0,1]$$ for which $$g(c)=0$$. Hence a root exists in that interval.
