<template>
 <footer class="footer">
 <Sns />
  <p class="copyright">&copy; copyright Ishikawa</p>
 </footer>
</template>

<script>
import Sns from '@/components/Sns.vue'

export default{
    components:{
        Sns,
    },
}
</script>

<style lang="scss" scoped>
.footer{
    background:#333;
}

.copyright{
    padding:17px 16px;
    font-size:12px;
    max-width:980px;
    margin:0 auto;
    color:#fff;
    text-align: center;
}
</style>