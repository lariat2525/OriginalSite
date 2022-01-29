<template>
  <div id="app">
  <div v-for="continent in computedContinents" :key="continent">
    {{continent.name}}
    <ul>
      <li  v-for="country in continent.countries" :key="country">
      {{country}}
      </li>
    </ul>
  </div>
  </div>

</template>
<script>
import { country_data } from "~/components/nisiyama_data.js";
console.log(country_data);
//配列そのまま表示してるだけだから注意
//function ここで呼ぶ
export default {
  name: "App",
  data() {
    return {
      country_data
    };
  },
computed:{
  computedPrice(){
    const continents = this.countriy_data.continent.map((continentValue, continentIndex)=>{
      const countries = this.countriy_data.country.reducer((prev, current)=>{
        return current.continent_id = continentIndex? prev.push(current.name) :prev
      }, [])
      return {name: continentValue.name, countries:countries}
    })
    return continents
  }
}
};
//この下でfunction定義？？
</script>