<template>
  <h5>ID：{{ items }}</h5>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get("http://localhost:5000");
    return { items };
  },
};
</script>
