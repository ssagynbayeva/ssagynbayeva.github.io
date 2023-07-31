---
layout: page
title: Research
# featured_image: /assets/images/pages/about.jpg
---
<script>
  $(document).ready(function() {
  setTimeout(function() { $("#preloader").fadeOut(1500); }, 100)
});
</script>
>## <span style="font-family:Caveat;">Current Projects</span>

### Circumplanetary disks
{% include image-caption.html imageurl="/assets/images/posts/research/cpd-den.png#right" caption="" width="400" %}

Circumplanetary disks, of which the disk in the PDS 70 system is the first directly observed example, play a crucial role in the accretion of material onto planets, as well as in the formation of their satellite systems. By studying the properties of circumplanetary disks, we can gain insight into the role they play in shaping the Solar System and other planetary systems. In our work, we developed high-resolution 3D hydrodynamical simulations with Athena++ to study angular momentum transport onto CPDs. Angular momentum accretion onto CPDs determines the overall long-term disk evolution, and helps us understand the accretion of dust that creates planetary satellites. We are working on nested mesh simulations that will help us understand the early stages of the formation of Solar System and extrasolar gas giants and potentially their satellites. This work is conducted under the supervision of [Professor Phil Armitage](http://www.astro.sunysb.edu/parmitage/) (Stony Brook/CCA).

<a href="/posters/Origins-poster-print.pdf" target="_blank">View my poster for Origins of the Solar Systems 2023</a>

<!-- ### <span style="font-family:Andale Mono;">Stellar spots of HAT-P-11</span> -->
### Stellar variability 
{% include image-caption.html imageurl="/assets/images/posts/research/HAT-P-11-ani.gif#right" caption="" width="400" %}

Planets help us to understand stars, and vice-versa. We are interested in mapping stellar surfaces of exoplanets-hosting stars using the Kepler and TESS data. This can be efficiently done (we hope) using hierarchical Bayesian modeling treating the starspots on the surfaces of stars as a statistical population! For this, we are considering the properties of the starspots as hyperparameters of our Gaussian Process model. We are using multiple stellar light curves to do the ensemble statistics with [<span style="font-family:American Typewriter;">StarryProcess</span>](https://starry-process.readthedocs.io/en/latest/), but the exoplanets orbiting those stars already help to set constraints, because of their transits. I am working on this project with [Dr. Rodrigo Luger](https://www.luger.dev) and [Professor Will Farr](https://farr.github.io).

<a href="/posters/ERES-poster-print.pdf" target="_blank">View my poster for ERES 2023</a>

<!-- ### <span style="font-family:Andale Mono;">Binary black hole merger in AGN disks</span> -->
### Binary black hole merger in AGN disks
{% include image-caption.html imageurl="/assets/images/posts/research/bbh.gif#right" caption="" width="400" %}

It is widely accepted that active galactic nuclei (AGN) are powered by the release of gravitational energy as mass falls onto a supermassive black hole (SMBH) in the center of AGN via accretion. There are also other, not so massive, black holes (BHs) dynamically moving inside the AGN disks. These dynamical interactions between black holes and the disks they are embedded into might lead some of the black holes to form binaries and merge. I am working on analyzing the evolution of orbital parameters of black hole binaries in AGN disks using 3D hydrodynamical simulations. I am working on this project with [Professor Saavik Ford](https://saavikford.wixsite.com/saavik), [Professor Barry McKernan](https://www.amnh.org/research/staff-directory/barry-mckernan), and [Professor Phil Armitage](http://www.astro.sunysb.edu/parmitage/).

<!-- ### <span style="font-family:Andale Mono;">Migration of planets in protoplanetary disks</span> -->
<!-- ### Migration of planets in protoplanetary disks
{% include image-caption.html imageurl="/assets/images/posts/research/den_smr3.png#right" caption="" width="400" %}

Planetary systems are dynamic places. As the planet's tidal force exerts a torque on the disk, the back-reaction from the disk also torques the planet, causing it to migrate. In this project, we are concerned about Type I migration - the migration of low-mass planets. Particularly, we aim to investigate the migration due to thermal torques, considering the planet as a luminous object extracting thermal energy on the disk.
This work is conducted under the supervision of [Professor Phil Armitage](http://www.astro.sunysb.edu/parmitage/) (Stony Brook/CCA) and [Dr. Yan-Fei Jiang](https://jiangyanfei1986.wixsite.com/yanfei-homepage/home) (CCA). -->

>## <span style="font-family:Caveat;">Past Projects</span>

<!-- ### <span style="font-family:Andale Mono;">Black Hole Mimickers</span> -->
### Black Hole Mimickers
{% include image-caption.html imageurl="/assets/images/posts/research/bhmims.jpg#right" caption="" width="100" %}

We investigated the properties of particle collisions in the vicinity of compact objects that deviate from the usual black hole solutions of general relativity. We assumed static axisymmetric spacetimes where the spherical symmetry is broken by the presence of some quadrupole. As test metrics, we used two well-known Weyl solutions, the Erez-Rosen and the Zipoy-Voorhees solution. We calculated the center of mass energy for particle collisions that take place at the ISCO and find it to depend on the deformation parameters. We also investigated the "near-horizon" collisions and find that the behavior deviates from that of Schwarzschild, particularly in the case of prolate deformations. This work was done under the supervision of [Professor Daniele Malafarina](https://ssh.nu.edu.kz/faculty/daniele-malafarina-phd/) at Nazarbayev University.

[`Read the paper`](https://arxiv.org/pdf/2009.12839.pdf)

<!-- ### <span style="font-family:Andale Mono;">Star Formation</span> -->
### Star Formation
{% include image-caption.html imageurl="/assets/images/posts/research/skeleton_RHT_NH.png#right" caption="" %}

We analyzed the relative orientation of the magnetic field structure in Monoceros OB1 region, which is important for the understanding of how the magnetic field affects the evolution of the interstellar medium and the formation of stars. I used Rolling Hough Transform to run the detection algorithms for data from Planck and Herschel telescopes. The purpose of the technique is to find imperfect instances of objects within a certain class of shapes by a voting procedure. In this work, Hough transform was concerned with the identification of lines in the image. To analyze the direction of the filaments, I reconfigured the intensity map making it "skeleton"-structured. Because the "skeleton" is a sequence of points, it helped to find a clear point of branching of the filaments by the "neighboring method". This work was conducted under [Dr. Dana Alina](https://ssh.nu.edu.kz/faculty/dana-alina-phd/) and [Professor Ernazar Abdikamalov](https://ernazarabdikamalov.wordpress.com) at Nazarbayev University. 

[`Read the paper`](https://arxiv.org/pdf/2007.15344.pdf)

