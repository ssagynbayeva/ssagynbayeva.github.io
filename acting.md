---
layout: page
title: Acting
# featured_image: /assets/images/pages/about.jpg
---
<script>
  $(document).ready(function() {
  setTimeout(function() { $("#preloader").fadeOut(1500); }, 100)
});
</script>

<style>
.acting-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
}
.acting-headshot {
  flex: 1 1 280px;
  max-width: 360px;
}
.acting-headshot img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
}
.acting-resume {
  flex: 2 1 380px;
  min-width: 300px;
}
.acting-resume table {
  width: 100%;
  border-collapse: collapse;
}
.acting-resume h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.acting-resume h3:first-child {
  margin-top: 0;
}
.acting-resume td {
  vertical-align: top;
  padding: 0.25rem 0.5rem 0.25rem 0;
}
@media (max-width: 640px) {
  .acting-headshot { max-width: 100%; }
}
</style>

<div class="acting-wrap">

  <div class="acting-headshot">
    <img src="/assets/images/acting/headshot.jpg" alt="Headshot of Sabina Sagynbayeva">
  </div>

  <div class="acting-resume">

    <p><a href="/assets/acting/resume.pdf" target="_blank">View or download my acting resume (PDF)</a></p>

    <h3>Contact</h3>
    <table>
      <tr><td>Height</td><td>—</td></tr>
      <tr><td>Hair</td><td>—</td></tr>
      <tr><td>Eyes</td><td>—</td></tr>
      <tr><td>Voice</td><td>—</td></tr>
    </table>

    <h3>Theater</h3>
    <table>
      <tr><td><em>Show Title</em></td><td>Role</td><td>Theater / Company</td></tr>
    </table>

    <h3>Film / TV</h3>
    <table>
      <tr><td><em>Project Title</em></td><td>Role</td><td>Director / Studio</td></tr>
    </table>

    <h3>Training</h3>
    <table>
      <tr><td>Acting</td><td>Program / Teacher</td></tr>
      <tr><td>Voice</td><td>Program / Teacher</td></tr>
      <tr><td>Dance</td><td>Program / Teacher</td></tr>
    </table>

    <h3>Special Skills</h3>
    <p>Singing (songwriter), guitar, ...</p>

  </div>

</div>