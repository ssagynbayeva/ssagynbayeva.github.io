---
layout: post
title: 'Intro to FVMs'
tags: [writing, blog]
featured_image_thumbnail: assets/images/posts/blog/20180803_092910.jpg
featured_image: assets/images/posts/blog/slack_humor.png
featured: true
---
<script>
  $(document).ready(function() {
  setTimeout(function() { $("#preloader").fadeOut(1500); }, 100)
});
</script>


Most of what is shown here is based on [Micahel Zingale's textbook](http://bender.astro.sunysb.edu/hydro_by_example/CompHydroTutorial.pdf). 

First, I just want to convince you that hydro simulations are just *a work of art*. 

Essentially, the hydro codes just solve three Euler equations.

$$\partial_t\rho+\nabla \cdot[\rho \textbf{v}]=0$$
$$\partial_t[\rho\textbf{v}]+\nabla\cdot[\rho\textbf{v}\otimes\textbf{v}+P]=0$$
$$\partial_tE+\nabla\cdot[(E+P)\textbf{v}] = 0$$

where $\rho$ is the gas density, $v$ its velocity and $P$ its pressure. 

Here, $E$ is the specific total energy which is related to the specific internal energy as:

$$
\rho E = \rho e + \frac{1}{2} \rho u^2
$$

and the system is closed by an equation of state:

$$p = p(\rho, e)$$

A common equation of state is a *gamma-law EOS*:

$$ p = \rho e (\gamma - 1)$$

where $\gamma$ is a constant.  For an ideal gas, $\gamma$ is the ratio of specific heats, $c_p / c_v$.

# Finite-Volume Methods

The key point of the method to discritize your fields in the way that your conservation laws hold (mass, momentum, and energy). Consider a uniform discretization of the
domain $[x_L, x_R]$. The discretization will go as follows: 
$$x_i = x_L+(i+1/2)\delta x$$
We will also need the midpoint values:
$$x_{i-1/2} = x_i - \delta x = x_L+i\delta x$$
These values define computational cells or *control volumes*:
$$C_i = [x_{i-1/2},x_{i+1/2})$$
Cell averages are defined as:
$$U^n_i \approx \frac{1}{\delta x}\int_{x_{i-1/2}}^{x_{i+1/2}}U(x,t^n)dx$$

We want to solve the following heat equation:
$$\frac{dT}{dt}-\nabla(k\nabla T) = 0$$
Let's discritize everything! We usually use $n$ for time increments and $ijk$ for spatial increments.
$$\frac{dT}{dt} = \frac{T_c^{n+1}-T_c^n}{\Delta t}$$
Divergence theorem:
$$\int\int_V-\nabla\cdot(k\nabla T)dV=\int_S-(k\nabla T)dS$$
$$\int_S-(k\nabla T)dS = \sum (-(k\nabla T)_i\cdot S_i)$$
$$\frac{T_c^{n+1}-T_c^n}{\Delta t}+\sum (-(k\nabla T)_i\cdot S_i) = 0$$
Let's look at one of the faces. For the face $i$, we can write ($A_i$ is the face area, $n_i$ is the direction of the normal):
$$-(k\nabla T)_i\cdot S_i = -k A_i n_i(\frac{dT}{dx})_i = -k A_i n_i\frac{T_E-T_c}{\delta x}$$
We will call $\frac{-kA_i}{\delta x}$ as $f$ for the flux through that face.
In the end we will have:
$$T_c^{n+1} = T_c^n+\Delta t(f_cT_c - \sum f_iT_i)$$

<pre><code class="language-python">
def FVdemo(T, imax, jmax, time, delt=0.2, k=1, FaceArea=1, dh=1):
    """
    need:
    Tc, Te, Tw, Tn, Ts 
    FluxC, FluxE, FluxW, FluxN, FluxS;
    
    T is an NxN matrix
    delt is a delta t
    """
    Tb0 = 0
    Tb = 240
    i = 0
    j = 0
    for t in range(0,len(time)-1):
        delt = time[t+1] - time[t]
        for i in range(0,imax):
            for j in range(0,jmax):
                Tc = T[i, j];
                dx = dh;

                if (i == imax - 1): 
                    Te = Tb0; 
                    dx = dx / 2;
                else:
                    Te = T[i + 1, j];
                FluxE = (-k * FaceArea) / dx;

                if (i == 0): 
                    Tw = Tb0; 
                    dx = dx / 2; 
                else:
                    Tw = T[i - 1, j];
                FluxW = (-k * FaceArea) / dx;

                if (j == jmax - 1): 
                    Tn = Tb0; 
                    dx = dx / 2; 
                else:
                    Tn = T[i, j + 1];
                FluxN = (-k * FaceArea) / dx;

                if (j == 0): 
                    Ts = Tb; 
                    dx = dx / 2;
                else:
                    Ts = T[i, j - 1];
                FluxS = (-k * FaceArea) / dx;

                FluxC = FluxE + FluxW + FluxN + FluxS;


                T[i, j] = Tc + delt * (FluxC * Tc - (FluxE * Te + FluxW * Tw + FluxN * Tn + FluxS * Ts));
    return T

</code></pre>