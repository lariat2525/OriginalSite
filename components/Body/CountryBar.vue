<template>
  <div>{{country_data}}</div>
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
  }
};
//この下でfunction定義？？
</script>