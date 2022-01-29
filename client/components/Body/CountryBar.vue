<template>
  <div id="app">
    <div v-for="continent in computedContinents" :key="continent.id">
      {{ continent.name }}
      <ul>
        <li v-for="country in continent.countries" :key="country">
          {{ country }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { country_data } from "./nisiyama_data";

export default {
  name: "App",
  data() {
    return {
      country_data: country_data,
    };
  },
  computed: {
    computedContinents() {
      const continents = this.country_data.continent.map((continentValue) => {
        const countries = this.country_data.country.reduce((prev, current) => {
          const { continent_id, name } = current
          if(continent_id === continentValue.id){
            prev.push(name)
          }
          return prev
        },[]);
        return { id: continentValue.id, name: continentValue.name, countries: countries };
      });

      return continents
    },
  },
};
</script>