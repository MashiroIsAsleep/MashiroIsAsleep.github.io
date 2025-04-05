---
title: CalcBC Ch9 - Parametric, Polar, and Vectors
published: 2025-04-09
description: 'Notes on AP calcBC chapter 9'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: true
lang: 'en'
---

## Chapter 9: Parametric Equations, Polar Coordinates, and Vector–Valued Functions

In this chapter we expand our toolbox by studying alternative representations of curves and motion. Instead of expressing functions solely as $$ y=f(x) $$, we can describe curves using parametric equations, represent motion with vector–valued functions, and work in polar coordinates. These methods not only provide different perspectives but also offer powerful techniques to tackle complex problems in physics, engineering, and beyond.

---

## 9.1 Defining and Differentiating Parametric Equations

Parametric equations express both $$ x $$ and $$ y $$ as functions of a third variable (usually $$ t $$). A curve is defined by:
$$
x = f(t), \quad y = g(t).
$$
To find the slope of the tangent line, we compute
$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt},
$$
provided $$ dx/dt \neq 0 $$.

### Self–Check 1

**Problem:**  
For the parametric equations
$$
x = t^2 + 1, \quad y = t^3 - t,
$$
find $$ \frac{dy}{dx} $$ in terms of $$ t $$.

**Solution:**

1. Differentiate:
   - $$ \frac{dx}{dt} = 2t, $$
   - $$ \frac{dy}{dt} = 3t^2 - 1. $$
2. Compute the derivative:
   $$
   \frac{dy}{dx} = \frac{3t^2 - 1}{2t}.
   $$

---

## 9.2 Second Derivatives of Parametric Equations

The second derivative, $$ \frac{d^2y}{dx^2} $$, tells us about the curvature of the parametric curve. It is computed by differentiating $$ \frac{dy}{dx} $$ with respect to $$ t $$ and dividing by $$ dx/dt $$:
$$
\frac{d^2y}{dx^2} = \frac{d}{dt}\left(\frac{dy}{dx}\right) \div \frac{dx}{dt}.
$$

### Self–Check 2

**Problem:**  
Given
$$
x = t^2, \quad y = t^3,
$$
find $$ \frac{d^2y}{dx^2} $$ in terms of $$ t $$.

**Solution:**

1. First derivative:
   - $$ \frac{dx}{dt} = 2t, $$
   - $$ \frac{dy}{dt} = 3t^2, $$
   - So, $$ \frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}. $$
2. Differentiate $$ \frac{dy}{dx} $$ with respect to $$ t $$:
   - $$ \frac{d}{dt}\left(\frac{3t}{2}\right) = \frac{3}{2}. $$
3. Divide by $$ dx/dt $$:
   $$
   \frac{d^2y}{dx^2} = \frac{\frac{3}{2}}{2t} = \frac{3}{4t}.
   $$

---

## 9.3 Finding Arc Lengths of Curves Given by Parametric Equations

The arc length of a curve defined by parametric equations from $$ t=a $$ to $$ t=b $$ is given by:
$$
L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt.
$$
This formula comes from approximating the curve by small line segments and taking the limit as the segment length approaches zero.

### Self–Check 3

**Problem:**  
Find the arc length of the curve defined by
$$
x = 2t, \quad y = t^2,
$$
for $$ t $$ in $$ [0,3] $$.

**Solution:**

1. Compute derivatives:
   - $$ \frac{dx}{dt} = 2, $$
   - $$ \frac{dy}{dt} = 2t. $$
2. Set up the integral:
   $$
   L = \int_0^3 \sqrt{(2)^2 + (2t)^2}\,dt = \int_0^3 \sqrt{4 + 4t^2}\,dt.
   $$
3. Factor out 4:
   $$
   L = \int_0^3 2\sqrt{1+t^2}\,dt = 2\int_0^3 \sqrt{1+t^2}\,dt.
   $$
4. (Leave the answer in integral form or evaluate numerically as desired.)

---

## 9.4 Defining and Differentiating Vector–Valued Functions

Vector–valued functions express curves in space by specifying each coordinate as a function of a parameter:
$$
\vec{r}(t) = \langle x(t),\, y(t),\, z(t) \rangle.
$$
The derivative, $$ \vec{r}'\,(t) $$, represents the velocity vector, giving both speed and direction:
$$
\vec{r}'\,(t) = \langle x'(t),\, y'(t),\, z'(t) \rangle.
$$

### Self–Check 4

**Problem:**  
Given
$$
\vec{r}(t) = \langle \cos t,\, \sin t,\, t \rangle,
$$
find $$ \vec{r}'\,(t) $$.

**Solution:**

1. Differentiate each component:
   - $$ \frac{d}{dt}(\cos t) = -\sin t, $$
   - $$ \frac{d}{dt}(\sin t) = \cos t, $$
   - $$ \frac{d}{dt}(t) = 1. $$
2. So,
   $$
   \vec{r}'\,(t) = \langle -\sin t,\, \cos t,\, 1 \rangle.
   $$

---

## 9.5 Integrating Vector–Valued Functions

Integrating a vector–valued function allows us to determine the position function from a velocity function. If
$$
\vec{v}(t) = \vec{r}'\,(t),
$$
then the position function is given by:
$$
\vec{r}(t) = \int \vec{v}(t)\,dt.
$$
This process is done component–wise.

### Self–Check 5

**Problem:**  
Find the position function given
$$
\vec{v}(t) = \langle 2,\, 3t,\, 4e^t \rangle,
$$
and the initial condition $$ \vec{r}(0)= \langle 0,\, 1,\, 2 \rangle $$.

**Solution:**

1. Integrate each component:
   - For the first component: $$ \int 2\,dt = 2t + C_1; \quad C_1=0 \text{ (since } x(0)=0 \text{)}. $$
   - Second component: $$ \int 3t\,dt = \frac{3t^2}{2} + C_2; \quad C_2=1 \text{ (since } y(0)=1 \text{)}. $$
   - Third component: $$ \int 4e^t\,dt = 4e^t + C_3; \quad C_3=2-4= -2 \text{ (since } z(0)=2 \text{)}. $$
2. Therefore,
   $$
   \vec{r}(t) = \langle 2t,\, \frac{3t^2}{2}+1,\, 4e^t-2 \rangle.
   $$

---

## 9.6 Solving Motion Problems Using Parametric and Vector–Valued Functions

Motion in the plane or space can be modeled using parametric or vector–valued functions. The derivative of the position function gives the velocity vector, and its magnitude yields speed. These representations are essential for solving problems in mechanics—for example, determining the path, speed, or acceleration of a moving object.

### Self–Check 6

**Problem:**  
A particle moves according to
$$
\vec{r}(t) = \langle t,\, t^2,\, \ln(t+1) \rangle.
$$
Determine the particle’s speed at time $$ t=1 $$.

**Solution:**

1. First, find the velocity vector:
   - $$ \frac{d}{dt}(t)=1, $$
   - $$ \frac{d}{dt}(t^2)=2t, $$
   - $$ \frac{d}{dt}(\ln(t+1))=\frac{1}{t+1}. $$

   So,
   $$
   \vec{v}(t) = \langle 1,\, 2t,\, \frac{1}{t+1} \rangle.
   $$
2. At $$ t=1 $$,
   $$
   \vec{v}(1) = \langle 1,\, 2,\, \frac{1}{2} \rangle.
   $$
3. The speed is the magnitude:
   $$
   |\vec{v}(1)| = \sqrt{1^2+2^2+\left(\frac{1}{2}\right)^2} = \sqrt{1+4+\frac{1}{4}} = \sqrt{\frac{20+1}{4}} = \sqrt{\frac{21}{4}} = \frac{\sqrt{21}}{2}.
   $$

---

## 9.7 Defining Polar Coordinates and Differentiating in Polar Form

In polar coordinates, a point is defined by a radius $$ r $$ and an angle $$ \theta $$:
$$
x = r\cos\theta, \quad y = r\sin\theta.
$$
When a curve is defined by a polar equation $$ r=r(\theta) $$, its derivative with respect to $$ x $$ is given by:
$$
\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}.
$$
This formula is essential for analyzing the slope of polar curves and for converting between coordinate systems.

### Self–Check 7

**Problem:**  
For the polar curve
$$
r(\theta)= 2+2\sin\theta,
$$
find $$ \frac{dy}{dx} $$ in terms of $$ \theta $$.

**Solution:**

1. Compute $$ \frac{dr}{d\theta} = 2\cos\theta. $$
2. Substitute into the formula:
   $$
   \frac{dy}{dx} = \frac{(2\cos\theta)\sin\theta + (2+2\sin\theta)\cos\theta}{(2\cos\theta)\cos\theta - (2+2\sin\theta)\sin\theta}.
   $$
3. Simplify the numerator:
   $$
   = \frac{2\cos\theta\sin\theta + 2\cos\theta + 2\sin\theta\cos\theta}{2\cos^2\theta - 2\sin\theta - 2\sin^2\theta}.
   $$
   Combine like terms in the numerator:
   $$
   = \frac{4\cos\theta\sin\theta + 2\cos\theta}{2\cos^2\theta - 2\sin\theta - 2\sin^2\theta}.
   $$
   (This expression can be simplified further as needed.)

---

## 9.8 Finding the Area of a Polar Region or the Area Bounded by a Single Polar Curve

The area of a region defined by a polar curve $$ r=r(\theta) $$ over an interval $$ \theta\in[\alpha,\beta] $$ is computed by:
$$
A = \frac{1}{2}\int_{\alpha}^{\beta} [r(\theta)]^2\,d\theta.
$$
This formula arises by dividing the region into narrow sectors and summing their areas.

### Self–Check 8

**Problem:**  
Find the area enclosed by the polar curve
$$
r(\theta)= 3\cos\theta,
$$
for $$ \theta $$ between $$ -\frac{\pi}{2} $$ and $$ \frac{\pi}{2} $$.

**Solution:**

1. Set up the area integral:
   $$
   A = \frac{1}{2}\int_{-\pi/2}^{\pi/2} [3\cos\theta]^2\,d\theta = \frac{1}{2}\int_{-\pi/2}^{\pi/2} 9\cos^2\theta\,d\theta.
   $$
2. Factor constants:
   $$
   A = \frac{9}{2}\int_{-\pi/2}^{\pi/2} \cos^2\theta\,d\theta.
   $$
3. Use the identity $$ \cos^2\theta = \frac{1+\cos2\theta}{2} $$:
   $$
   A = \frac{9}{2}\cdot\frac{1}{2}\int_{-\pi/2}^{\pi/2} (1+\cos2\theta)\,d\theta = \frac{9}{4}\left[\theta + \frac{\sin2\theta}{2}\right]_{-\pi/2}^{\pi/2}.
   $$
4. Evaluate:
   - At $$ \theta=\pi/2 $$: $$ \frac{\pi}{2} + \frac{\sin\pi}{2} = \frac{\pi}{2}. $$
   - At $$ \theta=-\pi/2 $$: $$ -\frac{\pi}{2} + \frac{\sin(-\pi)}{2} = -\frac{\pi}{2}. $$
   $$
   A = \frac{9}{4}\left(\frac{\pi}{2} - \left(-\frac{\pi}{2}\right)\right) = \frac{9}{4}\cdot \pi = \frac{9\pi}{4}.
   $$

---

## 9.9 Finding the Area of the Region Bounded by Two Polar Curves

When two polar curves, $$ r=r_1(\theta) $$ and $$ r=r_2(\theta) $$ (with $$ r_1(\theta) \ge r_2(\theta) $$), enclose a region, the area between them is:
$$
A = \frac{1}{2}\int_{\alpha}^{\beta} \left( [r_1(\theta)]^2 - [r_2(\theta)]^2 \right)\,d\theta.
$$
This method subtracts the inner area from the outer area to obtain the net region.

### Self–Check 9

**Problem:**  
Find the area of the region bounded by the polar curves
$$
r_1(\theta)= 4, \quad r_2(\theta)= 2,
$$
for $$ \theta $$ from $$ 0 $$ to $$ 2\pi $$.

**Solution:**

1. Since the curves are circles (with constant radii), the area between them is:
   $$
   A = \frac{1}{2}\int_0^{2\pi} \left(4^2 - 2^2\right)\,d\theta = \frac{1}{2}\int_0^{2\pi} \left(16-4\right)\,d\theta = \frac{1}{2}\int_0^{2\pi} 12\,d\theta.
   $$
2. Integrate:
   $$
   A = \frac{1}{2}\cdot 12\cdot (2\pi) = 12\pi.
   $$

---
