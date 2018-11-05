<template>
  <div>
    <div>
      <h2>FusionCharts List Demo</h2>
    </div>
    <ul>
      <li><a @click="toIndex('/Area2D')">Area2D(default)</a></li>
      <li><a @click="toIndex('/Bar2D')">Bar2D</a></li>
      <li><a @click="toIndex('/Bar3D')">Bar3D</a></li>
      <li><a @click="toIndex('/BoxAndWhisker2D')">BoxAndWhisker2D</a></li>
    </ul>
   </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    toIndex (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: underline;
  }
  a:hover{
    cursor: pointer;
  }
</style>
