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
<!-- >## <span style="font-family:Caveat;">Current Projects</span> -->

### Starspots 
{% include image-caption.html imageurl="/assets/images/posts/research/orbit-starspots.gif#right" caption="" width="400" %}

We develop a new method for mapping the surfaces of stars by analyzing the light curves of planets that pass in front of them (transits). Planets help us understand stars, and vice-versa. When astronomers try to study exoplanet atmospheres by looking at how starlight filters through them during transits, starspots can interfere with these measurements. Having better maps of stellar surfaces helps correct for this interference.

We are interested in mapping stellar surfaces of exoplanets-hosting stars using the Kepler and TESS data. This can be efficiently done (we hope) using hierarchical Bayesian modeling (with Gaussian Processes) treating the starspots (dark regions on a star's surface) on the surfaces of stars as a statistical population! The key innovation is that while it has been difficult to map starspots using just regular brightness measurements, we show that when you combine regular stellar brightness data with data from when planets cross in front of the star and temporarily block spots, you can get much better information about where spots are located on the star's surface. For this, rather than trying to determine the exact position of every spot (which is extremely difficult), our model focuses on determining the overall distribution of spots - things like how many spots there typically are, how big they are, and what latitudes they tend to appear at. We are using multiple stellar light curves to do the ensemble statistics with [<span style="font-family:American Typewriter;">StarryProcess</span>](https://starry-process.readthedocs.io/en/latest/), but the exoplanets orbiting those stars already help to set constraints, because of their transits.

[`Read the paper`](https://ui.adsabs.harvard.edu/abs/2025arXiv250421852S/abstract)

<a href="/posters/ERES-poster-print.pdf" target="_blank">View my poster for ERES 2023</a>

<a href="/posters/CoolStarsPoster.pdf" target="_blank">View my poster for Cool Stars 2024</a>

### Habitable Worlds Observatory
{% include image-caption.html imageurl="/assets/images/posts/research/coronagraph.png#right" caption="" width="400" %}

We studied how NASA's upcoming Habitable Worlds Observatory (HWO) telescope should be designed to find potentially habitable planets like Earth around nearby stars. The main challenge is that these planets are incredibly faint compared to their bright host stars - like trying to spot a firefly next to a spotlight from thousands of miles away. HWO needs a special light-blocking device called a coronagraph with very specific capabilities, and it should take about 40 preliminary measurements from ground-based telescopes before HWO even starts observing. Our analysis shows that HWO will need 6-8 separate observations spread across several years to confirm whether a planet is truly in the "habitable zone" where liquid water could exist.

The bigger picture is that we're not just looking for Earth-like planets - we're also studying the giant planets farther out in these planetary systems, similar to our Jupiter. Understanding both types of planets together is crucial because giant planets can either help or harm the chances of life on smaller, rocky worlds. The presence or absence of these "cold giants" affects how much water gets delivered to inner planets and whether their orbits remain stable enough for life to develop. For that, we ran detailed orbital fitting experiments using [<span style="font-family:American Typewriter;">octofitter</span>](https://sefffal.github.io/Octofitter.jl/dev/) to figure out how many observations HWO would actually need. We simulated three different approaches: using only radial velocity measurements from ground telescopes, using only HWO's direct imaging, and combining both techniques. Our key finding was that combining 40 ground-based radial velocity measurements (taken before HWO launches) with 6-8 space-based astrometric observations gives dramatically better results than either method alone. For the habitable zone planets specifically, we simulated the entire process of discovery and confirmation, showing that while you might suspect a planet is habitable after 4-5 observations, you need 8+ observations to be 95% confident it's truly in the right zone for liquid water.

[`Read the paper`](https://ui.adsabs.harvard.edu/abs/2025arXiv250721443S/abstract)

### Circumplanetary Disks
{% include image-caption.html imageurl="/assets/images/posts/research/midplane.png#right" caption="" width="400" %}

I study how disks of gas and dust form around giant planets while they're still growing within their solar systems. When Jupiter and Saturn were first forming, they were surrounded by material that would eventually either become part of the planet (its atmosphere) or form their moons. This surrounding material can organize itself into what we call a "circumplanetary disk" - essentially a smaller version of a protoplanetary disk, the disk that forms around young stars.

Circumplanetary disks, of which the disk around [PDS 70 c](https://science.nasa.gov/exoplanet-catalog/pds-70-c/) is the first directly observed example, play a crucial role in the accretion of material onto planets, as well as in the formation of their satellite systems. By studying the properties of circumplanetary disks, we can gain insights into the role they play in shaping the Solar System and other planetary systems. We set up simulations like a virtual laboratory where we could control key variables: the mass of the planet and the thickness of the gas disk around the star (essentially how puffy the disk is relative to its width). In our work, we developed high-resolution 3D hydrodynamical simulations with Athena++ to study angular momentum transport onto CPDs and the morphology of the gas inflow. 

[`Read the paper`](https://ui.adsabs.harvard.edu/abs/2024arXiv241014896S/abstract)

<a href="/posters/Origins-poster-print.pdf" target="_blank">View my poster for Origins of the Solar Systems 2023</a>

<!-- ### <span style="font-family:Andale Mono;">Stellar spots of HAT-P-11</span> -->

<!-- ### <span style="font-family:Andale Mono;">Binary black hole merger in AGN disks</span> -->

>## <span style="font-family:Caveat;">Past Projects</span>

### Binary black hole merger in AGN disks
{% include image-caption.html imageurl="/assets/images/posts/research/bbh.gif#right" caption="" width="400" %}

It is widely accepted that active galactic nuclei (AGN) are powered by the release of gravitational energy as mass falls onto a supermassive black hole (SMBH) in the center of AGN via accretion. There are also other, not so massive, black holes (BHs) dynamically moving inside the AGN disks. These dynamical interactions between black holes and the disks they are embedded into might lead some of the black holes to form binaries and merge. I am working on analyzing the evolution of orbital parameters of black hole binaries in AGN disks using 3D hydrodynamical simulations. 

<a href="https://lavinia.as.arizona.edu/~rixin/forCL/BBHdisk_SabinaSetup_animation.html" target="_blank">Play with the BBH animation here.</a>

<!-- ### <span style="font-family:Andale Mono;">Migration of planets in protoplanetary disks</span> -->
<!-- ### Migration of planets in protoplanetary disks
{% include image-caption.html imageurl="/assets/images/posts/research/den_smr3.png#right" caption="" width="400" %}

Planetary systems are dynamic places. As the planet's tidal force exerts a torque on the disk, the back-reaction from the disk also torques the planet, causing it to migrate. In this project, we are concerned about Type I migration - the migration of low-mass planets. Particularly, we aim to investigate the migration due to thermal torques, considering the planet as a luminous object extracting thermal energy on the disk.
This work is conducted under the supervision of [Professor Phil Armitage](http://www.astro.sunysb.edu/parmitage/) (Stony Brook/CCA) and [Dr. Yan-Fei Jiang](https://jiangyanfei1986.wixsite.com/yanfei-homepage/home) (CCA). -->

<!-- >## <span style="font-family:Caveat;">Past Projects</span> -->

<!-- ### <span style="font-family:Andale Mono;">Black Hole Mimickers</span> -->
### Black Hole Mimickers
{% include image-caption.html imageurl="/assets/images/posts/research/bhmims.jpg#right" caption="" width="100" %}

We investigated the properties of particle collisions in the vicinity of compact objects that deviate from the usual black hole solutions of general relativity. We assumed static axisymmetric spacetimes where the spherical symmetry is broken by the presence of some quadrupole. As test metrics, we used two well-known Weyl solutions, the Erez-Rosen and the Zipoy-Voorhees solution. We calculated the center of mass energy for particle collisions that take place at the ISCO and find it to depend on the deformation parameters. We also investigated the "near-horizon" collisions and find that the behavior deviates from that of Schwarzschild, particularly in the case of prolate deformations. This work was done under the supervision of [Professor Daniele Malafarina](https://ssh.nu.edu.kz/faculty/daniele-malafarina-phd/) at Nazarbayev University.

[`Read the paper`](https://ui.adsabs.harvard.edu/abs/2021GReGr..53..112M/abstract) -->

<!-- ### <span style="font-family:Andale Mono;">Star Formation</span> -->
<!-- ### Star Formation
{% include image-caption.html imageurl="/assets/images/posts/research/skeleton_RHT_NH.png#right" caption="" %}

We analyzed the relative orientation of the magnetic field structure in Monoceros OB1 region, which is important for the understanding of how the magnetic field affects the evolution of the interstellar medium and the formation of stars. I used Rolling Hough Transform to run the detection algorithms for data from Planck and Herschel telescopes. The purpose of the technique is to find imperfect instances of objects within a certain class of shapes by a voting procedure. In this work, Hough transform was concerned with the identification of lines in the image. To analyze the direction of the filaments, I reconfigured the intensity map making it "skeleton"-structured. Because the "skeleton" is a sequence of points, it helped to find a clear point of branching of the filaments by the "neighboring method". This work was conducted under [Dr. Dana Alina](https://ssh.nu.edu.kz/faculty/dana-alina-phd/) and [Professor Ernazar Abdikamalov](https://ernazarabdikamalov.wordpress.com) at Nazarbayev University. 

[`Read the paper`](https://arxiv.org/pdf/2007.15344.pdf) -->