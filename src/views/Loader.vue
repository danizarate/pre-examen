<template>
  <!-- <Menu /> -->
  <div class="container alinear">
    <div class="row">
      <div class="col">
        <div class="spinner-border text-info"></div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col2 centrar">
        Loading
        <div class="spinner-grow spinner-grow-sm"></div>
        <div class="spinner-grow spinner-grow-sm"></div>
        <div class="spinner-grow spinner-grow-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* import Menu from '@components/Menu.vue' */
export default {
  name: "loader"
  /* Menu */
};
</script>

<style>
.centrar {
  margin: 0 auto;
}

.alinear {
  margin-top: 15%;
}
</style>
