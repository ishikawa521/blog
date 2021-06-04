<template>
<section class="contents-item">
<h2 class="contents-item-title">{{title}}</h2>
<slot />
</section>
</template>

<script>
// @ is an alias to /src
export default {
    props:{
        title:String
    }
}
</script>

<style lang="scss" scoped>
.contents-item{
    padding:60px 12px 120px;
    margin:0 auto;
    max-width:896px;
}

.contents-item-title{
    margin:0 auto 40px;
    font-size:24px;
    position:relative;
    color:#333;
    &:after{
        content:'';
        display:block;
        border-bottom:1px solid #333;
        width:200px;
    }
}
</style>