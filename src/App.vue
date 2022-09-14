<template>
<Header/>
  <router-view/>
  <Footer/>
</template>

<script>
//@ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default{
name:'Home',
components:{
Header,
Footer
},
}
</script>

<style lang="scss">

*{
margin:0;
padding:0;
}

#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
