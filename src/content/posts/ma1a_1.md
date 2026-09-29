---
title: ma1a_1
published: 2026-09-28
description: 'Lecture notes'
image: ''
tags: [Math, Note]
category: 'Lecture Notes'
draft: false 
lang: ''
---

Office hour Thursday 4 - 5pm 356 Linde hall

Sets. Wednesday - Monday.

## Definition: Set

A set is a collection $X$ of objects called elements.

$\rightarrow$ If $x$ belongs to $X$, write $x \in X$

$$
\rightarrow X = \{x_1, x_2, x_3, \ldots\}
$$

$\varnothing$: empty set. Set with no elements.

$\forall$: for any.

$\exists$: exists

## Two sets A, B

Union of A & B

$$
A \cup B = \{x \mid x \in A \text{ or } x \in B\}
$$

Intersection.

$$
A \cap B = \{x \mid x \in A \text{ and } x \in B\}
$$

If $C$ is subset of $A$ $\rightarrow$ $C \subseteq A$

$C \subset A$ $\rightarrow$ Proper subset.

### Set Difference

$$
A \setminus B = \{x \mid x \in A \text{ and } x \notin B\}
$$

## Definition. The cardinality of finite set A

$|A|$ or $\#A$. is the number of elements in $A$.

If $A, B$ are finite sets.

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

$\rightarrow$ The simplest case of. Inclusion exclusion principal.

## Examples

Set of natural numbers. $\mathbb{N}$.

Set of Integers. $\mathbb{Z}$

Set of rational numbers.

$$
\mathbb{Q} = \left\{\frac{a}{b} \mid a, b \in \mathbb{Z} \text{ and } b \ne 0\right\}
$$

set of real numbers $\mathbb{R}$

## Two Statements A, B

A false Statement implies any Statement.

$A \rightarrow B$. A implies B.

$A \leftrightarrow B$. A is equivalent to B. A iff B.

$\neg A$ $\sim A$. Negation of A.

fact. $(A \rightarrow B) \leftrightarrow (\sim B \rightarrow \sim A)$. Contrapositive.

## Methods of proofs

### 1. Proof by direct verification

Example. for all $x, y \in \mathbb{R}$, we have.

$$
x^2 + y^2 \ge 2xy.
$$

Proof. $(x - y)^2 \ge 0$.

$$
x^2 - 2xy + y^2 \ge 0. \quad \square
$$

### 2. Proof by contrapositive

Example. $n^2$ is odd $\rightarrow$ $n$ is odd.

$\hookrightarrow$ proof $n$ is even $\rightarrow$ $n^2$ is even.

$$
n = 2m.
$$

$$
n^2 = 4m^2. \quad \square
$$

### 3. Proof by Contradiction

Assume desired conclusion is false & deduce smth impossible.

Example. eq. $x^2 + y^2 = 1$ has no solution in positive integers $x$ & $y$

proof. Assume $x, y \in \mathbb{Z}^+$ such that $x^2 + y^2 = 1$.

$$
(x + y)(x - y) = 1.
$$

So $x + y = x - y = 1$ or $-1$.

$$
\rightarrow y = -y = 0. \quad \square
$$

Same result through direct verification.

If $x > y$ are positive integers. then $x^2 - y^2 \ge 3$.

Proof. $x > y \rightarrow x \ge y + 1$.

$$
x^2 - y^2 \ge (y + 1)^2 - y^2 = 2y + 1 \ge 3. \quad \square
$$

## Theorem. There's no rational number x satisfy $x^2 = 2$

Proof otherwise, Assume $x = \dfrac{a}{b}$, $x^2 = 2$, $a, b \in \mathbb{Z}$, $b \ne 0$

$$
\gcd(a, b) = 1.
$$

$a^2 = 2b^2$ $\rightarrow$ $a^2$ is even $\rightarrow$ $a$ is even

assume. $a = 2a_1$

$4a_1^2 = 2b^2$. $\rightarrow$ $b$ is even.

$\rightarrow$ 2 is a common divisor of 2. $\square$.
