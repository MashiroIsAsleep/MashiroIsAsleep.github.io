---
title: CalcBC Ch7 - Differential Equations
published: 2025-04-07
description: 'Notes on AP calcBC chapter 7'
image: ''
tags: [Notes, Math, CalcBC]
category: 'Notes-笔记'
draft: false
lang: 'en'
---

## Chapter 7: Differential Equations

Differential equations allow us to model and analyze systems where a quantity changes in relation to itself or other variables. They are fundamental in many fields such as physics, biology, economics, and engineering. In this chapter, we discuss several key topics:

1. Modeling with Differential Equations
2. Sketching Slope Fields
3. Euler’s Method for Approximations
4. Separation of Variables for General Solutions
5. Finding Particular Solutions Using Initial Conditions
6. Exponential Models
7. Logistic Models

Each topic is explored in depth with background insights and practical self–check problems.

---

## 7.1 Modeling with Differential Equations

Differential equations describe relationships between a function and its derivatives. They arise naturally when the rate of change of a quantity depends on the current state of the system. For instance, in population dynamics, the rate at which a population grows might depend on its current size. The general form
$$
\frac{dy}{dt} = f(t, y)
$$
captures such relationships. This modeling approach provides a framework for predicting future behavior based on current trends.

These models are standardly used in fields as diverse as physics (to model motion), chemistry (to study reaction rates), and finance (to predict investments). The power of differential equations is that once a model is established, various techniques can be used to analyze and solve for the function that describes the system.

### Self-Check 1

**Problem:**  
Suppose the rate at which a certain chemical concentration $$ y $$ changes in a reaction is directly proportional to its current concentration. Write the differential equation modeling this situation and describe its general solution form.

**Solution:**

1. **Modeling:**  
   Since the rate is proportional to $$ y $$, we write:
   $$
   \frac{dy}{dt} = ky,
   $$
   where $$ k $$ is a constant.

2. **General Solution:**  
   The general solution is:
   $$
   y(t) = y_0 e^{kt},
   $$
   where $$ y_0 $$ is the initial concentration.

---

## 7.2 Sketching Slope Fields

A slope field (or direction field) is a graphical tool that helps visualize the behavior of solutions to a differential equation without solving it explicitly. At each point $$ (t, y) $$, a short line segment is drawn with slope given by
$$
\frac{dy}{dt} = f(t,y).
$$
This visual representation allows you to see patterns such as equilibrium solutions, trends, and possible long–term behavior.

Slope fields are standardly used to gain intuition about the solutions and to check the reasonableness of analytic or numerical solutions. They can also be “stretched” to understand systems with more complicated dynamics.

### Self-Check 2

**Problem:**  
Consider the differential equation
$$
\frac{dy}{dt} = y - t.
$$
Describe how you would sketch its slope field and determine whether there appears to be an equilibrium solution.

**Solution:**

1. **Procedure:**  
   At several points $$ (t,y) $$, compute the slope $$ y - t $$ and draw a short line segment with that slope.

2. **Observation:**  
   Notice that if $$ y = t $$, then the slope becomes zero:
   $$
   \frac{dy}{dt} = t - t = 0.
   $$
   Hence, $$ y = t $$ acts as an equilibrium (or isocline) where the direction field has horizontal tangents.

---

## 7.3 Euler’s Method for Approximations

Euler’s Method is a numerical technique for approximating solutions to differential equations. It is especially useful when an analytic solution is difficult or impossible to obtain. The idea is to use the slope at a known point to estimate the value of the solution at a nearby point. The formula
$$
y_{n+1} = y_n + h\,f(t_n,y_n)
$$
provides the next value $$ y_{n+1} $$ using a small step size $$ h $$.

While simple, Euler’s Method can be “stretched” by refining the step size to improve accuracy. It also introduces the concept of numerical error, which is an important consideration in practical applications.

### Self-Check 3

**Problem:**  
Approximate the solution to the initial value problem
$$
\frac{dy}{dt} = 2y, \quad y(0)=1,
$$
using Euler’s Method with a step size of $$ h = 0.5 $$ to estimate $$ y(1) $$.

**Solution:**

1. **Step 1 (from $$ t=0 $$ to $$ t=0.5 $$):**  
   At $$ t=0 $$, $$ y(0)=1 $$ and $$ f(0,1)=2(1)=2 $$.
   $$
   y(0.5) \approx 1 + 0.5(2) = 2.
   $$

2. **Step 2 (from $$ t=0.5 $$ to $$ t=1.0 $$):**  
   At $$ t=0.5 $$, $$ y(0.5)=2 $$ and $$ f(0.5,2)=2(2)=4 $$.
   $$
   y(1) \approx 2 + 0.5(4) = 4.
   $$

Thus, Euler’s Method approximates $$ y(1) \approx 4 $$.

---

## 7.4 Separation of Variables for General Solutions

Separation of Variables is a powerful technique for solving first–order differential equations that can be written in the form
$$
\frac{dy}{dt} = g(t) h(y).
$$
The method involves rearranging the equation to group all terms involving $$ y $$ on one side and all terms involving $$ t $$ on the other:
$$
\frac{1}{h(y)}\,dy = g(t)\,dt.
$$
Integrating both sides yields the general solution.

This method is standardly used when the differential equation is “separable” and provides insight into the structure of the solution. It is also flexible enough to be applied to problems that model physical, biological, or economic systems.

### Self-Check 4

**Problem:**  
Solve the differential equation
$$
\frac{dy}{dt} = ty,
$$
with the initial condition $$ y(0)=3 $$ using separation of variables.

**Solution:**

1. **Separate variables:**
   $$
   \frac{1}{y}\,dy = t\,dt.
   $$

2. **Integrate both sides:**
   $$
   \int \frac{1}{y}\,dy = \int t\,dt \quad \Longrightarrow \quad \ln|y| = \frac{t^2}{2} + C.
   $$

3. **Solve for $$ y $$:**
   $$
   y = e^{\frac{t^2}{2} + C} = Ae^{\frac{t^2}{2}},
   $$
   where $$ A = e^C $$.

4. **Apply the initial condition $$ y(0)=3 $$:**
   $$
   3 = A e^0 \quad \Longrightarrow \quad A = 3.
   $$

Thus, the solution is
$$
y(t) = 3e^{\frac{t^2}{2}}.
$$

---

## 7.5 Finding Particular Solutions Using Initial Conditions

Once the general solution of a differential equation is obtained, initial or boundary conditions are used to determine the particular solution that fits the specific situation. This step is crucial in applications since the general solution often contains an arbitrary constant. By substituting the given initial condition into the general solution, the constant is determined uniquely.

This process is standard in problems from physics (e.g., initial velocity), biology (e.g., initial population), and other fields. It “stretches” the mathematical model to a precise scenario.

### Self-Check 5

**Problem:**  
Find the particular solution of the differential equation
$$
\frac{dy}{dt} = -0.5y,
$$
with the initial condition $$ y(0)=100 $$.

**Solution:**

1. **General solution:**  
   Separate variables:
   $$
   \frac{dy}{y} = -0.5\,dt.
   $$
   Integrate:
   $$
   \ln|y| = -0.5t + C \quad \Longrightarrow \quad y = Ae^{-0.5t}.
   $$

2. **Apply the initial condition:**  
   $$
   100 = Ae^0 \quad \Longrightarrow \quad A = 100.
   $$

Thus, the particular solution is
$$
y(t) = 100e^{-0.5t}.
$$

---

## 7.6 Exponential Models with Differential Equations

Exponential models arise when the rate of change of a quantity is directly proportional to the quantity itself. This leads to differential equations of the form
$$
\frac{dy}{dt} = ky.
$$
Their solutions, as discussed earlier, are given by
$$
y(t) = y_0e^{kt},
$$
which describe exponential growth (if $$ k>0 $$) or decay (if $$ k<0 $$). Exponential models are widely used in physics, biology, and finance to model processes such as radioactive decay, population growth, and interest accumulation.

These models are not only standard in their formulation but also serve as building blocks for more complex dynamics.

### Self-Check 6

**Problem:**  
A radioactive substance decays according to the law
$$
\frac{dN}{dt} = -\lambda N,
$$
where $$ \lambda=0.1 \, \text{day}^{-1} $$ and the initial amount is $$ N(0)=500 \, \text{grams} $$. Find the amount of substance after 10 days.

**Solution:**

1. **General solution:**  
   $$
   N(t) = 500e^{-0.1t}.
   $$

2. **Evaluate at $$ t=10 $$:**  
   $$
   N(10)= 500e^{-1} \approx 500(0.3679) \approx 183.95 \, \text{grams}.
   $$

Thus, approximately 184 grams remain after 10 days.

---

## 7.7 Logistic Models with Differential Equations

Logistic models describe growth that is initially exponential but slows as the system approaches a carrying capacity $$ L $$. The logistic differential equation is given by
$$
\frac{dy}{dt} = ky\left(1-\frac{y}{L}\right).
$$
This model is standard in population dynamics, where the growth rate decreases as the population nears the maximum sustainable level. It also finds applications in ecology, epidemiology, and economics.

Logistic models can be “stretched” further by analyzing stability and equilibrium points, making them powerful tools in understanding complex systems with constraints.

### Self-Check 7

**Problem:**  
A population grows logistically according to
$$
\frac{dP}{dt} = 0.5P\left(1-\frac{P}{1000}\right),
$$
with an initial population of $$ P(0)=100 $$. Find the equilibrium solutions and describe the long–term behavior of the population.

**Solution:**

1. **Equilibrium solutions occur when $$ \frac{dP}{dt} = 0 $$:**  
   $$
   0.5P\left(1-\frac{P}{1000}\right) = 0.
   $$
   This gives $$ P=0 $$ or $$ 1-\frac{P}{1000}=0 \Longrightarrow P=1000. $$

2. **Long–term behavior:**  
   Since the population is initially 100, and the logistic model predicts growth toward the carrying capacity, as $$ t\to\infty $$, $$ P(t)\to 1000 $$.

Thus, the population will stabilize at 1000 in the long run.

---
