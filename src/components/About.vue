<template>
 <section class="about">
  <h2 class="about-title">About</h2>
  <figure class="about-image">
    <img src="">
  </figure>
  <p class="about-name">Ishikawa Shuri</p>
  <p class="about-birthday">2001 / 05 / 21</p>
  <p class="about-skill"> HTML / CSS / Javascript / Vue / Photoshop / Illustrator</p>
 </section>
</template>

<style lang="scss" scoped>
.about{
  padding:16px 0;
  background-color:#6FEBCD;
  color:#fff;
  position:relative;
  height:300px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  overflow:hidden;
  &>*{
    margin:0 auto;
    width:100%;
    max-width:980px;
  }
  &:after{
    margin:0 auto;
    position:absolute;
    display:block;
    content:'';
    width:2000px;
    height:2000px;
    background-color:rgba(0,0,0,0.1);
    transform:rotate(15deg);
    left:-2100px;
    right:0;
  }
}
.about-title{
  padding:0 16px;
  margin:0 auto 8px;
  font-size:24px;
  position:relative;
  z-index:6;
  &:after{
    content:'';
    display:block;
    border-bottom:1px solid #fff;
    width:200px;
  }
}
.about-image{
  margin:auto;
  width:130px;
  height:130px;
  background-color:#fff;
  border-radius:6px;
  position:absolute;
  top:0;
  right:20px;
  left:860px;
  bottom:0;

  @media screen and(max-width:1024px){
    left:auto;
  }
  @media screen and(max-width:600px){
    position:static;
    margin:10px auto;
  }
}
.about-name{
  font-size:20px;
  padding:0 16px;
  z-index:6;
}
.about-birthday{
  padding:0 16px;
  font-size:14px;
  margin-bottom:16px;
  z-index:6;
}
.about-skill{
  padding:0 16px;
  font-size:16px;
  z-index:6;
}

</style>
