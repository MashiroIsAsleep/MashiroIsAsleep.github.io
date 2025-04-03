---
title: CalcBC Ch8 - Applications of Integration
published: 2025-04-08
description: 'Notes on AP calcBC chapter 8'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: false
lang: 'en'
---

## Chapter 8: Applications of Integration

Integration is a versatile tool in calculus that allows us to “accumulate” small changes to determine overall quantities. In this chapter, we apply integration techniques to solve problems in physics, economics, and geometry. We will see how integration is standardly used to compute average values, areas, volumes, and arc lengths—and we will explore how these methods can be adapted to more complex, real–world scenarios.

---

## 8.1 Finding the Average Value of a Function on an Interval

The average value of a function over an interval provides a meaningful summary of the function’s behavior. It is defined by:
$$
f_{avg} = \frac{1}{b-a} \int_a^b f(x)\,dx.
$$
This formula is used in many contexts—for example, to compute the average temperature over a day, the average speed of a vehicle, or the average concentration of a chemical in a solution. By “summing” the values of the function and dividing by the length of the interval, we obtain a single number that represents the typical output.

### Self-Check 1

**Problem:**  
Find the average value of the function $$ f(x)=x^2+1 $$ on the interval $$ [0,4] $$.

**Solution:**

1. **Set up the formula:**
   $$
   f_{avg} = \frac{1}{4-0}\int_0^4 (x^2+1)\,dx = \frac{1}{4}\int_0^4 (x^2+1)\,dx.
   $$

2. **Find the antiderivative:**
   $$
   \int (x^2+1)\,dx = \frac{x^3}{3} + x + C.
   $$

3. **Evaluate the definite integral:**
   $$
   \left[\frac{x^3}{3}+x\right]_0^4 = \left(\frac{4^3}{3}+4\right) - \left(0+0\right) = \left(\frac{64}{3}+4\right) = \frac{64+12}{3} = \frac{76}{3}.
   $$

4. **Compute the average value:**
   $$
   f_{avg} = \frac{1}{4}\cdot\frac{76}{3} = \frac{76}{12} = \frac{19}{3} \approx 6.33.
   $$

---

## 8.2 Connecting Position, Velocity, and Acceleration Using Integrals

In kinematics, integration plays a key role in linking position, velocity, and acceleration. The velocity function is the derivative of the position function, and by integrating the velocity, we can determine the displacement. Similarly, integrating the acceleration function gives the velocity.

For example, if a particle’s velocity is given by $$ v(t) $$, then the displacement from time $$ t=a $$ to $$ t=b $$ is:
$$
\Delta s = \int_a^b v(t)\,dt.
$$
This concept is foundational in physics and engineering, and it allows us to predict an object’s position based on its velocity over time.

### Self-Check 2

**Problem:**  
A car’s velocity is given by $$ v(t)= 3t^2-4t+2 $$ (in meters per second). Find the displacement from $$ t=0 $$ to $$ t=3 $$ seconds.

**Solution:**

1. **Set up the displacement integral:**
   $$
   \Delta s = \int_0^3 (3t^2-4t+2)\,dt.
   $$

2. **Find the antiderivative:**
   $$
   \int (3t^2-4t+2)\,dt = t^3 - 2t^2 + 2t + C.
   $$

3. **Evaluate from $$ t=0 $$ to $$ t=3 $$:**
   $$
   \left[t^3 - 2t^2 + 2t\right]_0^3 = (27 - 18 + 6) - 0 = 15.
   $$

Thus, the displacement is $$ 15 $$ meters.

---

## 8.3 Using Accumulation Functions and Definite Integrals in Applied Contexts

Accumulation functions model the total change or “accumulated value” of a quantity over time. This idea is used in economics to model total cost or revenue, in biology to determine population growth, and in physics for work done by a force. The accumulation function is defined as:
$$
A(x) = \int_a^x f(t)\,dt,
$$
which represents the total accumulation of $$ f(t) $$ from $$ t=a $$ to $$ t=x $$.

By analyzing accumulation functions, we can interpret the overall effect of a continuously changing rate. This approach can be “stretched” to model multi–stage processes or systems where the rate itself changes with time.

### Self-Check 3

**Problem:**  
The rate at which water flows into a tank is given by $$ R(t)= 5+0.5t $$ (in liters per minute). Find the total volume of water that enters the tank during the first 10 minutes.

**Solution:**

1. **Set up the accumulation function:**
   $$
   V = \int_0^{10} (5+0.5t)\,dt.
   $$

2. **Find the antiderivative:**
   $$
   \int (5+0.5t)\,dt = 5t + 0.25t^2 + C.
   $$

3. **Evaluate from $$ t=0 $$ to $$ t=10 $$:**
   $$
   \left[5t+0.25t^2\right]_0^{10} = (5(10)+0.25(10)^2) - 0 = (50+25) = 75.
   $$

Thus, 75 liters of water enter the tank in the first 10 minutes.

---

## 8.4 Finding the Area Between Curves

Finding the area between curves is a fundamental application of integration. When two functions, $$ f(x) $$ and $$ g(x) $$, define the upper and lower boundaries on an interval $$ [a,b] $$, the area between them is given by:
$$
\text{Area} = \int_a^b \bigl[f(x)-g(x)\bigr]\,dx.
$$
This technique is widely used in engineering and the sciences—for example, to determine the region of overlap between different data sets or to compute cross-sectional areas in design.

### Self-Check 4

**Problem:**  
Find the area between the curves $$ f(x)= x^2 $$ and $$ g(x)= x+2 $$ on the interval where they intersect.

**Solution:**

1. **Find the intersection points:**
   Set $$ x^2 = x+2 $$, which gives
   $$
   x^2-x-2=0 \quad \Longrightarrow \quad (x-2)(x+1)=0.
   $$
   So, $$ x=2 $$ and $$ x=-1 $$.

2. **Determine which function is on top:**
   For $$ x=0 $$ (between $$ -1 $$ and $$ 2 $$):
   - $$ f(0)=0 $$ and $$ g(0)=2 $$, so $$ g(x) $$ is above $$ f(x) $$.

3. **Set up the integral:**
   $$
   \text{Area} = \int_{-1}^{2} \bigl[(x+2)-x^2\bigr]\,dx.
   $$

4. **Evaluate the integral:**
   $$
   \int \left[(x+2)-x^2\right]\,dx = \frac{x^2}{2}+2x-\frac{x^3}{3} + C.
   $$
   Evaluate from $$ -1 $$ to $$ 2 $$:
   - At $$ x=2 $$:
     $$
     \frac{4}{2}+4-\frac{8}{3} = 2+4-\frac{8}{3} = 6-\frac{8}{3} = \frac{10}{3}.
     $$
   - At $$ x=-1 $$:
     $$
     \frac{1}{2} -2 +\frac{1}{3} = \frac{1}{2} -2 +\frac{1}{3} = \frac{3}{6} -\frac{12}{6}+\frac{2}{6} = -\frac{7}{6}.
     $$
   The area is:
   $$
   \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{10}{3}+\frac{7}{6} = \frac{20}{6}+\frac{7}{6} = \frac{27}{6} = \frac{9}{2}.
   $$

Thus, the area between the curves is $$ \frac{9}{2} $$ square units.

---

## 8.5 Volumes with Cross–Sections

Another way to use integration is to compute the volume of a solid with known cross–sections. When the cross–section perpendicular to the x–axis has an area $$ A(x) $$, the volume is:
$$
V = \int_a^b A(x)\,dx.
$$
Common cross–sections include squares, rectangles, triangles, and semicircles. This method is especially useful in design and architecture, where the cross–sectional shape is known, and one must determine the overall volume.

### Self-Check 5

**Problem:**  
A solid has a base on the interval $$ [0,3] $$, and every cross–section perpendicular to the x–axis is a square whose side is given by $$ s(x)= 4-x $$. Find the volume of the solid.

**Solution:**

1. **Express the area of each cross–section:**
   The area of a square is:
   $$
   A(x) = s(x)^2 = (4-x)^2.
   $$

2. **Set up the volume integral:**
   $$
   V = \int_0^3 (4-x)^2\,dx.
   $$

3. **Expand and integrate:**
   $$
   (4-x)^2 = 16 - 8x + x^2.
   $$
   Thus,
   $$
   V = \int_0^3 (16-8x+x^2)\,dx = \left[16x-4x^2+\frac{x^3}{3}\right]_0^3.
   $$

4. **Evaluate at $$ x=3 $$:**
   $$
   16(3)-4(9)+\frac{27}{3} = 48-36+9 = 21.
   $$

Thus, the volume is $$ 21 $$ cubic units.

---

## 8.6 Volume with Disk and Washer Methods

When a region is revolved around an axis, the resulting solid’s volume can be computed using the disk or washer methods. The **disk method** applies when the cross–sections perpendicular to the axis of revolution are solid disks:
$$
V = \pi \int_a^b [R(x)]^2\,dx,
$$
where $$ R(x) $$ is the radius. When the solid has a hole (i.e., it’s generated by revolving the area between two curves), the **washer method** is used:
$$
V = \pi \int_a^b \left([R_{\text{outer}}(x)]^2 - [R_{\text{inner}}(x)]^2\right)\,dx.
$$
These methods are standard in both academic problems and real–world design, such as in manufacturing or engineering applications where rotational symmetry is present.

### Self-Check 6

**Problem:**  
Find the volume of the solid obtained by revolving the region between $$ y=x $$ and $$ y=x^2 $$ around the x–axis.

**Solution:**

1. **Find the intersection points:**
   Set $$ x = x^2 \Longrightarrow x(x-1)=0 $$ so $$ x=0 $$ and $$ x=1 $$.

2. **Determine the radii:**
   - Outer radius: $$ R_{\text{outer}}(x)= x $$ (since $$ x \ge x^2 $$ for $$ 0\le x\le1 $$).
   - Inner radius: $$ R_{\text{inner}}(x)= x^2 $$.

3. **Set up the washer integral:**
   $$
   V = \pi \int_0^1 \left[x^2 - (x^2)^2\right]\,dx = \pi \int_0^1 \left(x^2 - x^4\right)\,dx.
   $$

4. **Integrate:**
   $$
   \int_0^1 (x^2 - x^4)\,dx = \left[\frac{x^3}{3} - \frac{x^5}{5}\right]_0^1 = \frac{1}{3} - \frac{1}{5} = \frac{5-3}{15} = \frac{2}{15}.
   $$

5. **Multiply by $$ \pi $$:**
   $$
   V = \pi\cdot\frac{2}{15} = \frac{2\pi}{15}.
   $$

Thus, the volume of the solid is $$ \frac{2\pi}{15} $$ cubic units.

---

## 8.7 The Arc Length of a Smooth, Planar Curve and Distance Traveled

The arc length of a curve provides a measure of the distance along the curve. For a smooth function $$ y=f(x) $$ defined on $$ [a,b] $$, the arc length is given by:
$$
L = \int_a^b \sqrt{1+[f'(x)]^2}\,dx.
$$
This formula is derived by approximating the curve with small linear segments and taking the limit as the segment length approaches zero. In practical applications, the arc length formula can also be used to calculate the total distance traveled by an object, even when its path is curved.

### Self-Check 7

**Problem:**  
Find the arc length of the curve $$ y=\frac{1}{3}x^{3/2} $$ from $$ x=0 $$ to $$ x=9 $$.

**Solution:**

1. **Find the derivative:**
   $$
   y = \frac{1}{3}x^{3/2} \quad \Longrightarrow \quad f'(x)= \frac{1}{3}\cdot\frac{3}{2}x^{1/2} = \frac{1}{2}x^{1/2}.
   $$

2. **Set up the arc length integral:**
   $$
   L = \int_0^9 \sqrt{1+\left(\frac{1}{2}x^{1/2}\right)^2}\,dx = \int_0^9 \sqrt{1+\frac{x}{4}}\,dx.
   $$

3. **Simplify the integrand:**
   $$
   \sqrt{1+\frac{x}{4}} = \sqrt{\frac{4+x}{4}} = \frac{\sqrt{4+x}}{2}.
   $$

4. **Rewrite the integral:**
   $$
   L = \int_0^9 \frac{\sqrt{4+x}}{2}\,dx = \frac{1}{2}\int_0^9 \sqrt{4+x}\,dx.
   $$

5. **Make a substitution:**  
   Let $$ u = 4+x \Longrightarrow du=dx $$.  
   When $$ x=0, \, u=4 $$; when $$ x=9, \, u=13 $$.
   $$
   L = \frac{1}{2}\int_4^{13} \sqrt{u}\,du = \frac{1}{2}\cdot\frac{2}{3}u^{3/2}\Big|_4^{13} = \frac{1}{3}\left(u^{3/2}\Big|_4^{13}\right).
   $$

6. **Evaluate the integral:**
   $$
   L = \frac{1}{3}\left(13^{3/2}-4^{3/2}\right) = \frac{1}{3}\left(13\sqrt{13}-8\right).
   $$

Thus, the arc length of the curve is $$ \frac{1}{3}\Bigl(13\sqrt{13}-8\Bigr) $$ units.

---
