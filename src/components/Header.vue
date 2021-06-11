<template>
<header class="main-header">
<h1 class="main-title"><router-link :to="`/`">Ishikawa's portfolio</router-link></h1>
</header>
</template>

<style lang="scss" scoped>
.main-header{
background:#333;
}

.main-title{
padding:17px;
font-size:18px;
color:#fff;
width:896px;
margin:0 auto;
& a{
    color:#fff;
    text-decoration:none;
    &:hover{
        opacity:0.8;
    }
}
}
</style>