<template>
  <!-- <div class="logo-box">
    <img style="height:200px;" src="./assets/electron.png" alt="Electron logo" />
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>-->
  <Confuse msg="资源名称混淆" />
</template>

<script lang="ts">
import Confuse from "./components/Confuse.vue";

export default {
  name: "App",
  components: {
    Confuse
  }

};
</script>

<style>
.logo-box {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
