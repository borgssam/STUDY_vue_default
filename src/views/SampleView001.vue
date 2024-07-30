<template>
  <div class="">
    <h1>Hello, {{ title }}</h1>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
    <div v-text="htmlString"></div>
    <input type="text" v-model="valueMode" id="">
    <input type="number" v-model.number="numModel" id="">
    <textarea v-model="message" ></textarea>
  </div>
  <div> 
    <select v-model="city" >
      <option value="02">서울</option>
      <option value="03">부산</option>
      <option value="04">제주</option>
    </select>
  </div>
  <div><label for="cbox_">
    <input type="checkbox" id="cbox_" v-model="checked">{{ checked }}
    </label></div>
    <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{
checked }}</label>

<div>
<label><input type="checkbox" value="서울" v-model="checked"> 서울</label>
<label><input type="checkbox" value="부산" v-model="checked"> 부산</label>
<label><input type="checkbox" va1ue="제주" v-model="checked"> 제주</label>
<br>
<span>체크한 지역: {{ checked }}</span>
</div>


<div>
<label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
<label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
<label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
<br>
<span>선택한 지역: {{ picked }}</span>
</div>
<div><img v-bind:src="imgSrc"  alt=""></div>
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
      numModel:33,
      message: "여러 줄을 입력할 수 있는 textarea입니다.",
      city:"02",
      checked:[],
      picked:"",
      radioValuel: "서울",
      radioValue2:'부산',
      radioValue3:"제주",
      imgSrc:"https://kr.vuejs.org/images/logo.png",

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