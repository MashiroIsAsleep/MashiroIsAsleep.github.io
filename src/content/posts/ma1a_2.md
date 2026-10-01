---
title: ma1a_2
published: 2026-09-30
description: ''
image: ''
tags: [Math, Note]
category: 'Lecture Notes'
draft: false 
lang: ''
---

## Methods of proof

### 1. proof by Induction

Thm (Principal of induction).

let $P(n)$ be a statement about natural numbers.

#### i Ordinary Induction

Suppose. a $P(1)$ is true

b for every $n > 1$, $P(n-1) \rightarrow P(n)$

Then $P(n)$ is true for all $n \ge 1$

#### ii Strong Induction

fix $m \in \mathbb{N}$ Suppose.

c $P(m)$ is true.

d for every $n > m$, if $P(k)$ is true for all $m \le k \le n$

then $P(n)$ is true.

Then $P(n)$ is true for every $n \ge m$

#### Example-1

for every $n \ge 1$.

$$
1^2 + 2^2 + \cdots + n^2 = \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6} = \frac{n(n+1)(2n+1)}{6}.
$$

Proof. $n = 1$.

$$
\mathrm{LHS} = 1^2 = 1.
$$

$$
\mathrm{RHS} = \frac{1 \cdot 2 \cdot 3}{6} = 1.
$$

Suppose it is true for $n-1$, $n > 1$.

$$
1^2 + 2^2 + \cdots + (n-1)^2 = \frac{(n-1)^3}{3} + \frac{(n-1)^2}{2} + \frac{n-1}{6}
$$

add $n^2$ to both Sides.

$$
\begin{aligned}
1^2 + 2^2 + \cdots + n^2
&= \frac{n^3 - 3n^2 + 3n - 1}{3} + \frac{n^2 - 2n + 1}{2} + \frac{n-1}{6} + n^2 \\
&= \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6}. \quad \square
\end{aligned}
$$

#### Example 2

Claim: Every finite collection of cats has the same eye color.

Proposed proof.

Induct on number $n$ of cats.

$n = 1$ $\rightarrow$ True.

If true for $n-1$, Consider $n$.

by induction hypothesis all $n$ cats have same eye color.

Thus true for all $n$. $\square$.

$\uparrow$

The problem came from missing base case $n = 2$.

### 2. Proof by well ordering

Theorem (Well ordering principal.)

Every non-empty set of positive integers have a least element.

- Wop and Induction are equivalent.

Proposition. The wop is the principal of induction.

proof: only proof for strong induction.

When $m = 1$, Suppose $P(1)$ holds.

and $P(k)$ holds for all $k$, $1 \le k \le n$

$\rightarrow P(n)$ holds.

We want to show $P(n)$ holds for all $n \ge 1$.

let $S = \{n \in \mathbb{N} \mid P(n) \text{ is false}\}$

If $S = \varnothing$, done.

Otherwise, let $m$ be the least element in $S$.

Then $P(k)$ is true for all $k < m$.

So $P(m)$ is true by our assumption.

So $m \notin S$. ↯.

### 3. Disproof by Counterexample

Example. The assertion.

$$
a \mid bc \rightarrow a \mid b \text{ or } a \mid c
$$

Is false for arbitrary integers.

Take $a = 6$, $b = 4$, $c = 9$.

$a \mid bc$ but $a \nmid b$ & $a \nmid c$.

### 4. Pigeonhole Principal

Thm (pigeonhole principal).

If $n$ objects are placed in $k$ boxes and $n > k$.

Then at least 1 box contain at least 2 objects.

#### Stronger form of pigeonhole principal

for a real number $x$.

the Ceiling $\lceil x \rceil$ is the smallest int greater or equal to $x$.

floor $\lfloor x \rfloor$ is the largest int less or equal to $x$.

the fractional part $\{x\} = x - \lfloor x \rfloor$

Moreover.

at least 1 box contains $\left\lceil \dfrac{n}{k} \right\rceil$ objects.

Example. 217 student. in ma1a.

10 sections.

Atl one section has $\left\lceil \dfrac{217}{10} \right\rceil = 22$ Students.

## Equivalence relation

Defn. An equivalence relation on a set. is a relation, usually denoted by $\sim$, satisfying the following 3 properties for all elements of the set.

1. reflexivity: $a \sim a$.
2. symmetry. $a \sim b \rightarrow b \sim a$
3. transitivity. $a \sim b$ & $b \sim c$ $\rightarrow$ $a \sim c$.

We can decompose set $X$ into disjoint unions of subsets. Where every subset consists of elements equivalent to a given element.

- Each subset is called equivalence class.

### Example

Consider $X = \{(a, b) \mid a, b \in \mathbb{N}\}$

$$
(a_1, b_1) \sim (a_2, b_2) \quad \text{if } a_1 + b_2 = a_2 + b_1.
$$

check 3 properties.

let $S$ be the set of equivalence class.

Then we have bijection of $S$ with int.

$$
S \leftrightarrow \mathbb{Z}
$$

$$
[(a, b)] \in S \longrightarrow a - b \in \mathbb{Z}
$$

$$
(a_1, b_1) \sim (a_2, b_2) \leftrightarrow a_1 - b_1 = a_2 - b_2
$$
