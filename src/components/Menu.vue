<template>
  <!-- Image and text -->
  <nav class="navbar navbar-expand-md bg-primary navbar-dark">
    <!-- <a class="navbar-brand"> -->
    <router-link to="/Loader" class="navbar-brand">
      <img
        src="../assets/img/bender_icono.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
        loading="lazy"
      />
      Pre-Examen
    </router-link>
    <!-- </a> -->

    <!-- Toggler/collapsibe Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cursos Disponibles</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
/* lang="scss" */
/*  @include media-breakpoint-up(xs) { ... }
    @include media-breakpoint-up(sm) { ... }
    @include media-breakpoint-up(md) { ... }
    @include media-breakpoint-up(lg) { ... }
    @include media-breakpoint-up(xl) { ... } */
</style>
