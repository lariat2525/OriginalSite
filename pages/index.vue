<template>
<body>
  <div class="content">
    <div class="world_map"></div>
    <div class="country_table"></div>
  </div>
</body>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  height: 100%;
  .world_map {
    width: 75%;
    background: #777;
  }
  .country_table {
    width: 25%;
    background: whitesmoke;
  }
}
</style>