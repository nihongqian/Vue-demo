<template>
  <!--轮播图-->
    <swipe class="my-swipe" :speed='200'>
      <swipe-item class="slide1">
        <img src="../assets/img/banner0.png">
      </swipe-item>
      <swipe-item class="slide2">
        <img src="../assets/img/banner1.png">
      </swipe-item>
    </swipe>
</template>

<script>


import { Swipe, SwipeItem } from "vue-swipe";
export default {
  components: {
    'swipe': Swipe,
    "swipe-item": SwipeItem
  },
};
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
</style>
