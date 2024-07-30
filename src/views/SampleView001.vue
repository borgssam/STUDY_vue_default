<template>
  <div class="">
    <h1>Hello, {{ title }}</h1>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
    <div v-text="htmlString"></div>
    <input type="text" v-model="valueMode" id="">
  </div>
</template>

<script>
export default {
  name: 'SampleView001',
  components: {
    
  },
  data() {
    return {
      title:'World!!',
      htmlString: '<p style="color:blue">파란글임당</p>',
      valueMode:"대한민국",

      
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>