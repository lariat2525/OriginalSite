<template>
<body>
  <div class="content">
    <div class="world_map"></div>
    <div class="country_table">
      <CountryBar />
    </div>
  </div>
</body>
</template>

<script>
import CountryBar from "~/components/Body/CountryBar";

export default {
  components: {
    CountryBar
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  height: 100%;
  color: black;
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